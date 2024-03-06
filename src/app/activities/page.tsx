"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import handball from "../../../public/Handball.jpg";
import paddle from "../../../public/paddle.jpg";


export default function Activities() {
  const router = useRouter();
  return (
    <div className="flex items-center space-x-8 justify-center  mt-44  ">
      <div className="object-cover text-5xl text-center transition-transform duration-1000 hover:scale-105">
      <button
        onClick={() => router.push("/activities/handball")}
        className="h-[600px] w-[300px] object-cover rounded-t-xl"
      >
        <Image
          src={handball}
          alt="Hmandball"
          className="object-fill h-full w-full rounded-t-2xl"
        ></Image>
        <h1 className=" text-blue-700 border-2 border-t-0 pb-2 border-blue-200 rounded-b-xl">
          Handball
        </h1>
      </button>
      </div>
      <div className="object-cover text-5xl text-center transition-transform duration-1000 hover:scale-105">
      <button
        onClick={() => router.push("/activities/handball")}
        className="h-[600px] w-[300px] object-cover"
      >
        <Image
          src={paddle}
          alt="Hmandball"
          className="object-fill h-full w-full rounded-t-2xl"
        ></Image>
        <h1 className=" text-blue-700 border-2 border-t-0 pb-2 border-blue-200 rounded-b-xl">
         Paddle
        </h1>
      </button>
      </div>
    </div>
  );
}
