"use client";

import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { Cuota, LoguedUser } from "@/components/constants/interfaces";
import useFetchUser from "@/hooks/useFetchUser";

export default function CuotasDataResume() {
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
        <div className="flex lg:flex-row flex-col h-full w-full md:w-3/4 bg-blue-500 rounded-xl md:mt-16">
          <div className="flex flex-col w-[100%] justify-center text-center">
            <div>
              <h1 className="p-2 md:text-xl text-xs mb-4 font-bold border-b pb-2 border-lime-300">
                MIS CUOTAS
              </h1>
            </div>
            {user?.socio?.cuotas &&
              Object.values(
                user.socio.cuotas.reduce(
                  (acc: { [key: string]: Cuota }, cuota) => {
                    if (
                      !acc[cuota.name] ||
                      (acc[cuota.name] &&
                        !acc[cuota.name].isPayed &&
                        cuota.isPayed)
                    ) {
                      acc[cuota.name] = cuota;
                    }
                    return acc;
                  },
                  {} as { [key: string]: Cuota }
                )
              ).map((cuota, index) => (
                <div key={index}>
                  <h1
                    className={`text-xs md:text-xl bg-${
                      cuota.isPayed ? "lime" : "red"
                    }-500`}
                  >
                    <span>{cuota.name}</span>
                    <span>: {cuota.isPayed ? "Al día ✅" : "Deuda ❌"}</span>
                  </h1>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
