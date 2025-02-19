-- CreateTable
CREATE TABLE "tyre" (
    "id" SERIAL NOT NULL,
    "measurment" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "error" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "machine" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tyre_pkey" PRIMARY KEY ("id")
);
