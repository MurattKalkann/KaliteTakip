import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest, res: NextResponse) {
    const body = await req.json()
    const {records} = body;
    const data = await prisma.tyre.createMany({
        data: records
    })
    
    revalidatePath('/');
    return NextResponse.json({success: true});
    
}