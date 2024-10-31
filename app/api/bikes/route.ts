import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseBikeData } from "@/app/utils";

// GET: List all bikes
export async function GET() {
  try {
    const bikes = await prisma.bike.findMany();
    return NextResponse.json(bikes);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch bikes" },
      { status: 500 }
    );
  }
}

// POST: Create a new bike
export async function POST(request: Request) {
  try {
    const receivedData = await request.json();
    const data = parseBikeData(receivedData);
    const bike = await prisma.bike.create({
      data,
    });
    return NextResponse.json(bike, { status: 201 });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to create bike" },
      { status: 500 }
    );
  }
}
