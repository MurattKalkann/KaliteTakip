import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest, res: NextResponse) {
    const body = await req.json()
    const { machine, size, description, error, measurment, quantity } = body
    
    const data = await prisma.tyre.create({
        data: {
            machine: machine,
            size: size,
            description: description,
            error: error,
            measurment: measurment,
            quantity: quantity,
        },
    });
    revalidatePath('/');
    return NextResponse.json({success: true, data: data});
    
}