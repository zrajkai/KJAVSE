import React from 'react';
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex flex-col min-h-96 text-white"
      style={{ backgroundImage: "url('/sail1.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
      <nav>
        <ul>
          <li>
            <Image
              className="absolute top-2 left-2 "
              src="/kjavse_logo.png"
              alt="KJAVSE Logo"
              width={80}
              height={80}
              priority
            />
          </li>
        </ul>
        <ul className="grid grid-flow-col justify-end gap-4 md:gap-8 p-6 text-md md:text-2xl">
          <li>
            <Link
              key={"Főoldal"}
              href={"/"}
              className=" hover:text-gray-300 dark:text-zinc-200 dark:hover:text-neutral-300"
            >Főoldal</Link>
          </li>
          <li>
            <Link
              key={"Rólunk"}
              href={"/rolunk"}
              className=" hover:text-gray-300 dark:text-zinc-200 dark:hover:text-neutral-300"
            >Rólunk</Link>
          </li>
          <li>
            <Link
              key={"Kapcsolat"}
              href={"/kapcsolat"}
              className=" hover:text-gray-300 dark:text-zinc-200 dark:hover:text-neutral-300"
            >Kapcsolat</Link>
          </li>
          <li>
            <Link
              key={"GYIK"}
              href={"/gyik"}
              className=" hover:text-gray-300 dark:text-zinc-200 dark:hover:text-neutral-300"
            >GYIK</Link>
          </li>
        </ul>
      </nav>
      <div className="pt-52 md:pt-24 ps-6 md:ps-36">
        <h1 className="text-3xl md:text-6xl font-bold">Keszthelyi</h1>
        <p className="text-lg md:text-2xl font-semibold">József Attila Vitorlás Sportegyesület</p>
      </div>
    </header>
  );
};