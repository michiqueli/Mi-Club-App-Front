"use client";

import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import {
  UserDataInterface,
  LoguedUser,
} from "@/components/constants/interfaces";
import getUserById from "@/components/constants/request/getUserById";

export default function CuotasDataResume() {
  const { data: session } = useSession();
  const loguedUser = session?.user as LoguedUser;
  const id = loguedUser?.userId;
  const [user, setUser] = useState<UserDataInterface | undefined | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setLoading(false);
      } else {
        try {
          const data = await getUserById(id);
          setUser(data.user);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.error(error);
          setUser(null);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      }
    };
    fetchData();
  }, [id]);
  return (
    <main className="flex items-center justify-center h-3/4 text-center content-center">
      {loading ? (
        <div className="w-3/4 h-full flex justify-center items-center">
          <Spinner color="info" aria-label="Info spinner example" size="xl" />
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col h-full w-full md:w-3/4 bg-blue-500 rounded-xl md:mt-16">
          <div className="flex flex-col w-[100%] justify-center text-center">
            <div>
              <h1 className="p-2 md:text-xl text-xs mb-4 font-bold border-b pb-2 border-lime-300">
                MIS CUOTAS
              </h1>
            </div>
            {user?.socio.cuotas.map((cuota) => {
              return (
                <div>
                  {cuota.isPayed ? (
                    <h1 className=" bg-lime-500 text-xs md:text-xl">{cuota.name}</h1>
                  ) : (
                    <h1 className=" bg-red-600 text-xs md:text-xl">{cuota.name}</h1>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
