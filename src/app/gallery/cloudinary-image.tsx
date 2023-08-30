"use client";

import { Heart } from "@/components/ui/icons/heart";
import { CldImage } from "next-cloudinary";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/ui/icons/full-heart";
import setAsFavoriteAction from "./actions";

export function CloudinaryImage(props: any & { imageData: SearchResult ; path:string }) {
  const {imageData} = props
  const [transition, setTransition] = useTransition();
  const isFavorited = imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white  hover:cursor-pointer text-red-500"
          onClick={() => {
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500  hover:cursor-pointer"
          onClick={() => {
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}
