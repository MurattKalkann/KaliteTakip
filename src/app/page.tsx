import { DataTable } from "@/components/data-table";
import Header from "@/components/header";
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { getRecord } from "@/lib/fetcher";
import { RecordType } from "@/types/record.type";
import { PlusSquare } from "lucide-react";
import React from "react";

const Home = async () => {
  const data: RecordType[] = await getRecord();
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="p-5">
        <DataTable
          columns={[
            {
              header: "ID",
              accessorKey: "id",
              enableColumnFilter: true,
              enableSorting: true,
            },
            {
              header: "Ölçü",
              accessorKey: "measurment",
            },
            {
              header: "Ebat",
              accessorKey: "size",
            },
            {
              header: "Arıza",
              accessorKey: "error",
            },
            {
              header: "Adet",
              accessorKey: "quantity",
            },
            {
              header: "Makine",
              accessorKey: "machine",
            },
            {
              header: "Açıklama",
              accessorKey: "description",
            },
            {
              header: "Oluşturulma Tarihi",
              accessorKey: "createdAt",
            },
            {
              header: "Son Güncelleme Tarihi",
              accessorKey: "updatedAt",
            },
          ]}
          data={data}
        />
      </div>
    </div>
  );
};

export default Home;
