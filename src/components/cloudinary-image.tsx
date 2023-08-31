"use client";

import { Heart } from "@/components/ui/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeart } from "@/components/ui/icons/full-heart";
import setAsFavoriteAction from "../app/gallery/actions";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const { imageData, onUnheart } = props;
  const [transition, setTransition] = useTransition();
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 left-2 hover:text-white  hover:cursor-pointer text-red-500"
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-500  hover:cursor-pointer"
          onClick={() => {
            setIsFavorited(true);
            setTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
        />
      )}
      <ImageMenu /> 
    </div>
  );
}
