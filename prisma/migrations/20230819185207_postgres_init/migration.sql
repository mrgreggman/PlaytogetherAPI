-- CreateEnum
CREATE TYPE "Role" AS ENUM ('client', 'admin', 'root');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "message" TEXT,
    "image" TEXT,
    "postpublish" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "displayname" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "bio" TEXT,
    "favegames" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "gamename" TEXT NOT NULL,
    "splashart" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credential" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'client',

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);
