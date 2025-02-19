"use client";
import React from "react";
import { Button } from "./ui/button";
import { PlusSquare } from "lucide-react";
import { ModeToggle } from "./theme-toggler";
import { Input } from "./ui/input";
import { addRecord } from "@/lib/fetcher";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="flex justify-between m-3">
      {open && (
        <div className="absolute z-10 top-5 bottom-5 left-5 right-5 bg-slate-600">
          <Input
            name="machine"
            placeholder="Makine adı girin"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button
            className="m-2"
            onClick={async () => {
              const res = await addRecord({
                machine: value,
                description: "Açıklama",
                error: "Arıza",
                measurment: "Ölçü",
                quantity: 1,
                size: "Ebat",
              });
              console.log("data", res);

              setOpen(false);
            }}
          >
            {loading ? "Kaydediliyor..." : "Kaydet"}
          </Button>
        </div>
      )}
      <div>
        <Button onClick={() => setOpen(true)} className="p-0" size={"icon"}>
          <PlusSquare />
        </Button>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
