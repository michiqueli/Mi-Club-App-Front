"use client";
import { useState } from "react";
import UserResume from "./userPanelComponents/userResume";
import  UserData  from "./userPanelComponents/userData";

export default function UserPanel() {
  const [mostrar, setMostrar] = useState(<UserResume />);

  const userDataClick = () => {
    setMostrar(<UserData/>)
  }
  const userResumeClick = () => {
    setMostrar(<UserResume/>)
  }

  return (
    <main className="sm:pt-44 pt-20 flex h-full md:w-[80%] w-full">
    <div className="flex flex-col md:w-[20%] text-center items-center border-r-4 mt-8">
        <button onClick={userDataClick} className=" truncate my-4 w-10/12 text-xs lg:text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full">Datos</button>
        <button className=" truncate my-4 w-10/12 text-xs lg:text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full">Cuotas</button>
        <button className="truncate my-4 w-10/12 text-xs lg:text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full">Actividades</button>
        <button className="truncate my-4 w-10/12 text-xs lg:text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full">Reservas</button>
        <button onClick={userResumeClick} className="truncate my-4 w-10/12 text-xs lg:text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full">Resumen</button>
      </div>
      <div className="w-[80%] h-full">{mostrar}</div>
    </main>
  );
}
