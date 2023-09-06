"use client";

import ReactPlayer from "react-player";
import React from "react";

import { CldVideoPlayer } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface UploadResult {
  info: {
    asset_id: string;
    public_id: string;
    format: string;
    url: string;
  };
  event: "success";
}

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  p-16">
      <ReactPlayer
        url="/videos/sidhu3.mp4"
        controls
        width="350px"
        height="430px"
        loop={true}
        playing={true}
      />
      <Button
        asChild
        className="w-full flex gap-2 justify-center items-center mt-5"
      >
        <Link href="/gallery">Open Gallery to see pictures</Link>
      </Button>
    </main>
  );
}
