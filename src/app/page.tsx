"use client";

import { CldUploadButton  } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export interface UploadResult {
 info:{
  asset_id:string,
  public_id:string,
  format: string,
  url: string,

 },
 event:"success"
}



export default function Home() {
  const [ imageId , setImageId] = useState("")
  
  // const handleUpload: CldUploadEventCallbackNoOptions = (result: UploadResult) => {
  //   setImageId(result.info.public_id);
  //   // Handle the upload result
  // };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="t5abl3pi" 
     onUpload={(result:UploadResult) => {
      setImageId(result.info.public_id)
     }}
      />
     { imageId && ( <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
        // tint="70:blue:green:purple"
      //  blurFaces 
      // cartoonify 
      />)}
    </main>
  );
}
