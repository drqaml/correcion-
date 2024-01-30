import Link from "next/link";
import DmfLogo from "../dmflogo";
import { PowerIcon } from "@heroicons/react/20/solid";
import NavLinks from "./nav-links";

export default function SideBar() {

  return (
    <div className="w-[350px] h-full flex flex-col gap-3">
      <Link href="/dashboard">
        <DmfLogo />
      </Link>
      <div className="w-full bg-gris-1 rounded-2xl flex-grow flex flex-col justify-between">
        <div className="mt-12">
          <NavLinks />
        </div>
        <form
        // action={async () => {
        //   'use server';
        //   await signOut();
        // }}
        >
          <button className="w-full h-[70px] p-7 flex items-center justify-start gap-7 rounded-b-2xl hover:bg-gris-2 border-t-2 border-t-gris-2">
            <PowerIcon className="w-8" />
            <div className="text-lg">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}