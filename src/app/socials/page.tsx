"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className=" h-full flex-col justify-end items-end relative">
      <div className="flex flex-col  mt-5 ">
        <h3 className="text-2xl flex justify-center items-center ">
          Sidhu Socials
        </h3>
        <div className="flex justify-center gap-2">
          <Link href="https://www.instagram.com/sidhu_moosewala/?hl=en">
            <Image src="/insta.png" alt="insta icon" height="50" width="50" />
          </Link>
          <Link href="https://www.youtube.com/@SidhuMooseWalaOfficial">
            <Image src="/youtube.png" alt="insta icon" height="50" width="50" />
          </Link>
          <Link href="https://open.spotify.com/artist/4PULA4EFzYTrxYvOVlwpiQ">
            <Image
              src="/1.png"
              className="rounded-3xl"
              alt="insta icon"
              height="45"
              width="45"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
