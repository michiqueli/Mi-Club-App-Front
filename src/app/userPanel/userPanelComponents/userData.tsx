"use client";

import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { LoguedUser } from "@/components/constants/interfaces";
import useFetchUser from "@/hooks/useFetchUser";

export default function UserData() {
  const { data: session } = useSession();
  const loguedUser = session?.user as LoguedUser;
  const id = loguedUser?.userId;

  const { user, loading } = useFetchUser(id);

  return (
    <main>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner color="info" aria-label="Info spinner example" size="xl" />
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col h-full md:mt-16">
          <div className="h-full justify-center items-center content-center text-center lg:mt-8 flex lg:ml-4 lg:mr-8 m-8">
            <img
              src={user?.socio.image}
              alt="Foto de Socio"
              className="mb-4 object-cover square-image rounded-md"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="flex flex-col lg:w-[50%] justify-center text-center">
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">Nombre</h1>
              <h1 className=" sm:text-xl text-md font-light mb-4">
                {user?.socio.name} {user?.socio.last_name}
              </h1>
            </div>
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">
                Número de Socio
              </h1>
              <h1 className=" sm:text-xl text-md font-light mb-4">
                {user?.socio.number}
              </h1>
            </div>
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">DNI</h1>
              <h1 className=" sm:text-xl text-md font-light mb-4">
                {user?.socio.dni}
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] justify-center text-center">
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">
                Fecha de Nacimiento
              </h1>
              <h1 className=" sm:text-xl text-md font-light mb-4">
                {user?.socio.dob}
              </h1>
            </div>
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">Dirección</h1>
              <h1 className=" sm:text-xl text-md font-light mb-4">
                {user?.socio.address}
              </h1>
            </div>
            <div>
              <h1 className=" sm:text-2xl text-md font-semibold">Teléfono</h1>
              <h1 className="sm:text-xl text-md font-light mb-4">
                {user?.socio.phone}
              </h1>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
