import React from "react";
import Hfem from "/Hfemenino";

export default function ActivityCard(title, horarios, profesor) {
  return (
    <main className="h-[350px] w-[460px]">
      <img src={Hfem} alt="Handball Femenino">
        <h1>{title}</h1>
        <h2>{horarios}</h2>
        <h3>{profesor}</h3>
      </img>
    </main>
  );
}
