"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import getUserById from "./constants/request/getUserById";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const id = session?.user.userId;
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return null;
      }
      try {
        const data = await getUserById(id);
        setUser(data.user);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className="bg-blue-700 z-10 bg-opacity-80 fixed px-1 py-1 rounded-b-lg w-[100%] sm:w-[80%] justify-evenly">
      <Navbar
        fluid
        rounded
        className="bg-blue-700 text-xl bg-opacity-80 text-white"
      >
        <Navbar.Brand href="/">
          <img
            src="/Peuma.jpg"
            className="mr-3 h-12 sm:h-20 rounded-full lg:ml-12"
            alt="Logo Peuma"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PEUMA LIMAY
          </span>
        </Navbar.Brand>
        {user ? (
          <div className="flex md:order-2 ml-4 lg:mr-12">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="" src={"user.png"} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user?.socio.name} {user?.socio.last_name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
                <span className="block truncate text-sm font-medium">
                  Socio N° {user?.socio.number}
                </span>
              </Dropdown.Header>
              <Dropdown.Item href="/userPanel">Panel de Usuario</Dropdown.Item>
              <Dropdown.Divider />
              {user.role == "admin" ? (
                <Dropdown.Item href="/adminPanel">
                  Panel de Administración
                </Dropdown.Item>
              ) : (
                <></>
              )}
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  });
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2 ml-4 lg:mr-12">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" src="/user.jpg" rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">No has Iniciado Sesion</span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => router.push("/login")}>
                Sign In
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse>
          <Navbar.Link href="/about" className=" ml-4 text-xl text-white">
            Acerca del Club
          </Navbar.Link>
          <Navbar.Link href="/activities" className="text-xl text-white">
            Actividades
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}