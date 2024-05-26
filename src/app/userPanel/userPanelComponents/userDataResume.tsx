"use client";

import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { LoguedUser } from "@/components/constants/interfaces";
import useFetchUser from "@/hooks/useFetchUser";

export default function UserDataResume() {
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
        <div className="flex md:flex-row flex-col h-full md:w-3/4 md:mt-16 mt-16 bg-blue-500 rounded-xl">
          <div className="flex flex-col w-[100%] justify-center text-center">
            <div>
              <h1 className=" md:text-xl text-xs mb-4 p-2 font-bold border-b pb-2 border-lime-300">
                MIS DATOS
              </h1>
            </div>
            <div>
              <h1 className=" md:text-xl text-xs font-light mb-4">
                {user?.socio.name} {user?.socio.last_name}
              </h1>
            </div>
            <div>
              <h1 className=" md:text-xl text-xs font-light mb-4">
                {user?.socio.dni}
              </h1>
            </div>
            <div>
              <h1 className="md:text-xl text-xs font-light mb-4">
                {user?.socio.phone}
              </h1>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
