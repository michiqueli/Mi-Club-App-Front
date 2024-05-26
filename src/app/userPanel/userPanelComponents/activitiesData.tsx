"use client";

import React, { useState } from "react";
import { Spinner } from "flowbite-react";
import { useSession } from "next-auth/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
} from "@tanstack/react-table";
import { LoguedUser } from "@/components/constants/interfaces";
import useFetchUser from "@/hooks/useFetchUser";

export default function ActivitiesData() {
  const { data: session } = useSession();
  const loguedUser = session?.user as LoguedUser;
  const id = loguedUser?.userId;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const { user, loading } = useFetchUser(id);

  const data: any = user?.socio.actividades;

  const columns: any = [
    {
      header: "Actividad",
      accessorKey: "name",
    },
    {
      header: "Dias",
      accessorKey: "days",
    },
    {
      header: "Horario",
      accessorKey: "hours",
    },
  ];

  const table: any = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  if (loading) {
    return (
      <main className="flex items-center justify-center h-3/4 text-center">
        <div className="w-3/4 h-full flex justify-center items-center">
          <Spinner color="info" aria-label="Info spinner example" size="xl" />
        </div>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center ">MIS ACTIVIDADES</h1>
      <table className="min-w-full bg-white text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <th
                  key={header.id}
                  className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-xl"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {header.column.getIsSorted()
                        ? { asc: "⬆️", desc: "⬇️" }[
                            header.column.getIsSorted() as "asc" | "desc"
                          ]
                        : null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell: any) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 border-b border-gray-200 text-xl"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
