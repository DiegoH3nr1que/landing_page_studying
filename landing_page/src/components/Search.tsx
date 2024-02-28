import React from "react";
import Image from "next/image";
import IconSearch from "@/assets/icon-search.svg";

export default function Search() {
  return (
    <div className=" flex items-center gap-4">
      <Image src={IconSearch} alt="Search"/>
      <input type="text" className=" bg-transparent outline-none text-white"/>
    </div>
  );
}
