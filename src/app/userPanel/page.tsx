'use client'

import React, { useEffect, useState } from "react";
import { Spinner } from 'flowbite-react';
import getUserById from "@/components/constants/request/getUserById";
import { UserData } from "@/components/constants/interfaces";

export default function UserPanel() {
  const id = '90749638-d78c-4423-aba8-decdba9b4740';

  const [user, setUser] = useState<UserData | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserById(id);
        setUser(data.user);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log(user);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="pt-44 text-5xl mb-12">Panel de Usuario</h1>

      {loading ? (
        <Spinner color="info" aria-label="Info spinner example" size="xl" />
      ) : (
        <div className="text-2xl font-semibold text-center flex items-center justify-center flex-col">
          <img src={user?.socio.image} alt="Foto de Socio" className="mb-4 rounded-full"/>
          <h1>Nombre</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">{user?.socio.name} {user?.socio.last_name}</h1>
          <h1>Número de Socio</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">0{user?.socio.number}</h1>
          <h1>DNI</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">{user?.socio.dni}</h1>
          <h1>Fecha de Nacimiento</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">{user?.socio.dob}</h1>
          <h1>Dirección</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">{user?.socio.address}</h1>
          <h1>Teléfono</h1>
          <h1 className="border-b-4 border-blue-200 mb-4">{user?.socio.phone}</h1>
        </div>
      )}
    </div>
  );
}