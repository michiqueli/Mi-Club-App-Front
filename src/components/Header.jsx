"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <main className="bg-blue-700 bg-blur-sm px-1 py-1 rounded-b-lg h-full w-[100%] sm:w-[80%] justify-evenly">
      <Navbar
        fluid
        rounded
        className="bg-blue-700 text-xl text-white"
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
        <div className="flex md:order-2 ml-4 lg:mr-12">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" src="/user.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Nico Mennichelli</span>
              <span className="block truncate text-sm font-medium">
                michiqueli@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item href="/userPanel">Panel de Usuario</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/adminPanel">Panel de Administración</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/about" className=" ml-4 text-xl text-white">
            Acerca del Club
          </Navbar.Link>
          <Navbar.Link href="activities" className="text-xl text-white">
            Actividades
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}
