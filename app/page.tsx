import Image from "next/image";
import LoginForm from "./ui/login-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-around py-6 lg:py-12">
      <Image
        className="relative block lg:hidden"
        src="/logoDMF.svg"
        alt="DMF logo"
        width={250}
        height={250}
        priority
      />

      <Image
        className="relative hidden lg:block xl:hidden"
        src="/logoDMF.svg"
        alt="DMF logo"
        width={400}
        height={400}
        priority
      />

      <Image
        className="relative hidden xl:block"
        src="/logoDMF.svg"
        alt="DMF logo"
        width={680}
        height={680}
        priority
      />

      <LoginForm />
    </main>
  );
}
