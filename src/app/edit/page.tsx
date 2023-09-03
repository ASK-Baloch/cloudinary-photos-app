"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditPage = ({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) => {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "gray" | "pixelate" | "background"
  >();
  const [pendingPrompt ,setpendingPrompt ] = useState("")
  const [prompt ,setPromt ] = useState("")
  const router = useRouter();

  return (
    <section>
      <div className=" flex flex-col gap-8">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 ">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPromt(pendingPrompt)
                router.refresh();
              }}
            >
              Apply Generative fill
            </Button>
            <Label>Prompt</Label>
            <Input value={pendingPrompt} onChange={(e) => setpendingPrompt(e.currentTarget.value)} 
            placeholder="Enter what you want to add"  className="outline"/>
          </div>
          <Button
            onClick={() => {
              setTransformation("blur");
            }}
          >
            Apply Blur
          </Button>
          <Button
            onClick={() => {
              setTransformation("gray");
            }}
          >
            Convert Gray
          </Button>

          <Button
            onClick={() => {
              setTransformation("pixelate");
            }}
          >
            Pixelate
          </Button>
          <Button
            onClick={() => {
              setTransformation("background");
            }}
          >
            Remove Background
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              setTransformation(undefined);
            }}
          >
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-2">
          <CldImage
            src={publicId}
            width="300"
            height="200"
            alt="image of something"
          />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1600"
              height="1200" // Original 1440
              crop="pad" // Returns the given size with padding
              fillBackground={{ prompt }}
              alt="image of something"
              
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="300"
              height="200" // Original 1440
              blur="200"
              alt="image of something"
            />
          )}
          {transformation === "gray" && (
            <CldImage
              src={publicId}
              width="300"
              height="200" // Original 1440
              grayscale
              alt="image of something"
            />
          )}
          {transformation === "background" && (
            <CldImage
              src={publicId}
              height="300"
              width="200"
              alt="image of something"
              removeBackground
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              height="500"
              width="300"
              alt="image of something"
              pixelate
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default EditPage;
