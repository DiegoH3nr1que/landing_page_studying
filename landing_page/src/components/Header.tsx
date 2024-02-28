import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import ItemMenu from "./ItemMenu";
import Search from "./Search";
import IconUser from "@/assets/icon-user.svg";

export default function Header() {
  return (
    <header className=" relative flex items-center w-full h-20 bg-primary-orange">
      <div className=" flex items-center justify-between w-full max-w-[1246px] pl-[2%] mx-auto">
        <div className=" flex flex-1 items-center justify-between">
          <div className=" flex items-center gap-20">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
            <Search />
          </div>
        </div>
        <button className="flex w-[20%] justify-center items-center gap-4 bg-primary-blue h-20 pl-10">
          <Image src={IconUser} alt="User" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </div>
    </header>
  );
}
