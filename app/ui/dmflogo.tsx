import Image from "next/image";
import { robotoCondensed } from "./fonts";

export default function DmfLogo() {
  return (
    <div className="w-full h-48 p-3 bg-negro-1 text-dorado rounded-2xl flex flex-row items-center justify-around">
      <Image
        src="logoDorado.svg"
        width={90}
        height={90}
        alt="DMF logo"
      />
      <div className={`${robotoCondensed.className} antialiased`}>
        <p className="text-4xl">DMF</p>
        <span className="text-2xl">Joyas y Accesorios</span>
      </div>
    </div>
  )
}