import { RecordType } from "@/types/record.type";

export const getRecord = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/get-record", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          return data.data;
    } catch (error) {
        throw new Error('Error on fetching data');
    }
}

export const addRecord = async (recordData: RecordType) => {
    
    try {
        const res = await fetch("http://localhost:3000/api/add-record", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...recordData})
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        return {error: error};
        /* throw new Error('Error on adding data'); */
    }
};