"use client";

import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { LoguedUser } from "@/components/constants/interfaces";
import useFetchUser from "@/hooks/useFetchUser";

export default function ReservasDataResume() {
  const { data: session } = useSession();
  const loguedUser = session?.user as LoguedUser;
  const id = loguedUser?.userId;

  const { user, loading } = useFetchUser(id);

  return (
    <main className="flex items-center justify-center h-3/4 text-center content-center">
      {loading ? (
        <div className="w-3/4 h-full flex justify-center items-center">
          <Spinner color="info" aria-label="Info spinner example" size="xl" />
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col h-full md:w-3/4 w-full bg-blue-500 rounded-xl">
          <div className="flex flex-col w-[100%] justify-center text-center">
            <div>
              <h1 className=" p-2 md:text-xl text-xs mb-4 font-bold border-b pb-2 border-lime-300">
                MIS RESERVAS
              </h1>
            </div>
            <h1 className=" bg-lime-500 text-xs md:text-xl">Reserva Paddle</h1>
            <h1 className=" bg-lime-500 text-xs md:text-xl">Reserva Futbol</h1>
            <h1 className=" bg-lime-500 text-xs md:text-xl">Reserva Salon de Eventos</h1>
          </div>
        </div>
      )}
    </main>
  );
}
