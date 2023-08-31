"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

const setAsFavoriteAction = async (publicId: string, isFavorite: boolean) => {
  if (isFavorite) {
    // console.log("adding id  " + publicId  + "  to favorite");
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
};

export default setAsFavoriteAction;
