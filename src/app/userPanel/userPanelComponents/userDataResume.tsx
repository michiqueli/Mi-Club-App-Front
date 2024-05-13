"use client";

import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import { UserDataInterface } from "@/components/constants/interfaces";
import getUserById from "@/components/constants/request/getUserById";
import { LoguedUser } from "@/components/constants/interfaces";

export default function UserDataResume() {
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
        <main>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <Spinner color="info" aria-label="Info spinner example" size="xl" />
                </div>
            ) : (
                <div className="flex lg:flex-row flex-col h-full md:mt-16">
                    <div className="flex flex-col w-[100%] justify-center text-center">
                    <div>
                        <h1 className=" sm:text-xl text-md mb-4 font-bold">MIS DATOS</h1>
                    </div>
                        <div>
                            <h1 className=" sm:text-xl text-md font-light mb-4">
                                {user?.socio.name} {user?.socio.last_name}
                            </h1>
                        </div>
                        <div>
                            <h1 className=" sm:text-xl text-md font-light mb-4">{user?.socio.dni}</h1>
                        </div>
                        <div>
                            <h1 className="sm:text-xl text-md font-light mb-4">{user?.socio.phone}</h1>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}