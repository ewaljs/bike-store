import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseBikeData } from "@/app/utils";

// GET: Retrieve a specific bike by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const bike = await prisma.bike.findUnique({
      where: { id: Number((await params).id) },
    });
    if (!bike)
      return NextResponse.json({ error: "Bike not found" }, { status: 404 });
    return NextResponse.json(bike);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to fetch bike" },
      { status: 500 }
    );
  }
}

// PUT: Update a bike by ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const receivedData = await request.json();
    const data = parseBikeData(receivedData);
    const bike = await prisma.bike.update({
      where: { id: Number((await params).id) },
      data,
    });
    return NextResponse.json(bike);
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to update bike" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a bike by ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await prisma.bike.delete({
      where: { id: Number((await params).id) },
    });
    return NextResponse.json({ message: "Bike deleted successfully" });
  } catch (_error) {
    return NextResponse.json(
      { error: "Failed to delete bike" },
      { status: 500 }
    );
  }
}
