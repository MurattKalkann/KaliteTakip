"use client";
import React, { useEffect } from "react";
import * as XLSX from "xlsx";
import { Input } from "./ui/input";
import { addRecord, addRecords, getRecord } from "@/lib/fetcher";
import { Button } from "./ui/button";
import { RecordType } from "@/types/record.type";

const UploadExcel = () => {
  const measurment: any = [];
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      /* const sheetName = workbook?.Workbook?.Names?.find(
        (item) => item.Ref === "RADYAL!$B$2:$M$8554"
      ); */
      const sheet = workbook.Sheets["RADYAL"];
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      /* const test = sheet.C3;
      console.log("test:", test); */

      sheetData.forEach((item: any, index: number) => {
        if (index > 0 && index < 30) {
          const recordsObject: RecordType = {
            measurment: item.__EMPTY,
            error: item.__EMPTY_1,
            quantity: item.__EMPTY_2,
            description: item.__EMPTY_5,
            machine: item.__EMPTY_4 || "makine adı yok",
            size: item.__EMPTY_10,
          };
          measurment.push(recordsObject);
        }
        return;
      });
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <Input
        name="excel upload"
        placeholder="upload your data"
        type="file"
        onChange={handleFileUpload}
      />
      <Button onClick={async () => await addRecords(measurment)}>
        Save Excel Data
      </Button>
    </div>
  );
};

export default UploadExcel;
