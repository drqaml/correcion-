'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searhParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {

    const params = new URLSearchParams(searhParams);
    params.set('page', '1')
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathName}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block w-full rounded-lg border border-gray-200 py-[9px] pl-16 text-lg font-medium"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searhParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[24px] w-[36px] pr-3 -translate-y-1/2 border-r" />
    </div>
  );
}
