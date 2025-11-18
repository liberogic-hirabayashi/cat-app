"use client";
import Image from "next/image";
import { useState } from "react";

interface SearchCatImage{
  id:string;
  url:string;
  width:number;
  heigh:number;
}

export default function Home() {
  const defalut='/images/aoi01.jpg'
  const [cat, setCat] = useState<string>(defalut);
  const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();

    const image:SearchCatImage = result[0];
    // console.log(image.url);
    return setCat(image.url);
  };


  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <h1 className="text-[24px] font-bold">ねこねこ🐱</h1>
      <div className="h-[340px] flex justify-center items-center">

      <Image src={cat} alt="" width={300} height={300} className="h-full object-contain"/>
      </div>

      <button
        className="text-[14px] border px-2 py-1 mt-4 rounded-sm hover:bg-amber-50 hover:text-black"
        onClick={fetchCat}
      >
        今日の猫さま
      </button>
    </div>
  );

} 

