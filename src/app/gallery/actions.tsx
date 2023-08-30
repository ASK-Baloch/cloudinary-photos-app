"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

const setAsFavoriteAction = async (
  publicId: string,
  isFavorite: boolean,
  path: string
) => {
  if (isFavorite) {
    console.log("adding id  " + publicId  + "  to favourite");
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  revalidatePath(path);
};

export default setAsFavoriteAction;
