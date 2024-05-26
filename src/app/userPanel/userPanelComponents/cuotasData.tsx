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
import mpLogo from "/mp.png";

export default function CuotasData() {
  const { data: session } = useSession();
  const loguedUser = session?.user as LoguedUser;
  const id = loguedUser?.userId;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const { user, loading } = useFetchUser(id);

  const data: any = user?.socio.cuotas;

  const columns: any = [
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Mes",
      accessorKey: "month",
    },
    {
      header: "Año",
      accessorKey: "year",
    },
    {
      header: "Monto",
      accessorKey: "price",
      cell: ({ getValue }: any) => {
        return <p>$ {getValue()}</p>;
      },
    },
    {
      header: "Situación",
      accessorKey: "isPayed",
      cell: ({ getValue }: any) => {
        const isPayed: boolean = getValue();
        return (
          <main className="flex items-center justify-center">
            <span
              className={
                isPayed
                  ? "bg-lime-500 rounded-md p-1"
                  : "bg-red-500 rounded-md p-1"
              }
            >
              {isPayed ? "Pagada" : "No Paga"}
            </span>
            {!isPayed && (
              <button className="flex items-center justify-center border-gray-500 rounded-full border-2 ml-4">
                <span>
                  <img
                    className="rounded-full"
                    src="/mp.png"
                    alt="MP Logo"
                    height={40}
                    width={40}
                  />
                </span>
                <span className="ml-2 pr-2">Pagar</span>
              </button>
            )}
          </main>
        );
      },
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

  return (
    <main className="p-4">
      {loading ? (
        <div className="w-3/4 h-full flex justify-center items-center">
          <Spinner color="info" aria-label="Info spinner example" size="xl" />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">MIS CUOTAS</h1>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
