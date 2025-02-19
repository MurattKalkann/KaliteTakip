import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {

   const data = await prisma.tyre.findMany({
        select: {
            id: true,
            machine: true,
            size: true,
            description: true,
            error: true,
            measurment: true,
            quantity: true,
            createdAt: true,
            updatedAt: true,
        },
    });
return NextResponse.json({success: true, data: data});

}