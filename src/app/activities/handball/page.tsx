"use client";
import React from "react";
import HFemJuvMay from "../../../components/HandballCards/HFemJuvMay";
import HFemMenCad from "../../../components/HandballCards/HFemMenCad";
import HFemMinInf from "../../../components/HandballCards/HFemMinInf";
import HMasMinInf from "../../../components/HandballCards/HMasMinInf";
import HMasMenCad from "../../../components/HandballCards/HMasMenCad";
import HMasJuvMay from "../../../components/HandballCards/HMasJuvMay"

export default function Handball() {
  return (
    <div className="w-[65%]">
      <h1 className=" mt-36 text-center text-3xl text-blue-800 mb-4 border-b-4 border-blue-200">
        Femenino
      </h1>
      <div className="flex flex-col space-y-1 items-center xl:flex-row xl:space-x-8 justify-center">
        <HFemMinInf />
        <HFemMenCad />
        <HFemJuvMay />
      </div>
      <h1 className="mt-12 text-center text-3xl text-blue-800 mb-4 border-b-4 border-blue-200">
        Masculino
      </h1>
      <div className="flex flex-col space-y-1 xl:my-1 items-center lg:flex-row xl:space-x-8 justify-center">
        <HMasMinInf />
        <HMasMenCad />
        <HMasJuvMay/>
      </div>
    </div>
  );
}
