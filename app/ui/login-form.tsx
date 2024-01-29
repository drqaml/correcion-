'use client'

import Image from "next/image"
import {
  UserIcon,
  LockClosedIcon,
  ArrowRightIcon
} from '@heroicons/react/20/solid';
import { Button } from "./button";
import styles from '@/app/ui/home.module.css';

export default function LoginForm() {

  return (
    <form action="">
      <div className="w-[360px] lg:w-[530px] lg:h-[750px] p-10 bg-gris-1 flex flex-col gap-4 lg:gap-16 rounded-xl drop-shadow-lg">
        <div className="w-[360px] lg:w-[530px] relative left-[-40px] py-7 bg-negro-1 text-3xl text-dorado font-extrabold text-center">
          <h1>INICIO DE SESIÓN</h1>
        </div>

        <div>
          <p className="text-xl">Nombre de Usuario</p>
          <div className="w-full h-70px py-5 px-[9px] flex flex-row justify-between items-center border-b">
            <UserIcon className="w-8" />
            <input
              className="w-LInputWmin lg:w-LInputW h-LInputH pl-4 text-2xl focus:outline-none border-l bg-transparent"
              type="text"
              placeholder="Inserte su nombre de Usuario"
            />
          </div>
        </div>

        <div>
          <p className="text-xl">Contraseña</p>
          <div className="w-full h-70px py-5 px-[9px] flex flex-row justify-between items-center border-b">
            <LockClosedIcon className="w-8" />
            <input
              className="w-LInputWmin lg:w-LInputW h-LInputH pl-5 text-2xl focus:outline-none border-l bg-transparent"
              type="password"
              placeholder="Inserte su contraseña"
            />
          </div>
        </div>

        {/* <a href="/dashboard">INICIAR SESIÓN</a> */}
        <LoginButton />
      </div>
    </form>
  )
}

function LoginButton() {

  return (
    <Button className={styles.loginButton}>
      <p>INICIAR SESIÓN</p>
      <span className="ml-8">
        <ArrowRightIcon className="h-8 w-8" />
      </span>
    </Button>
  );
}