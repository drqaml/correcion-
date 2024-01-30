'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inventario', href: '/dashboard', icon: HomeIcon },
  { name: 'Registrar Productos', href: '/dashboard/registrarProductos', icon: DocumentDuplicateIcon, },
  { name: 'Registrar Ventas', href: '/dashboard/registrarVentas', icon: UserGroupIcon },
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("w-full h-[70px] p-7 flex items-center justify-start gap-7 hover:bg-gris-2",
              {
                'bg-dorado hover:bg-dorado': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-8" />
            <p className="text-lg">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
