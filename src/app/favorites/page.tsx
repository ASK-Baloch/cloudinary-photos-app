import { CloudinaryImage } from "../gallery/cloudinary-image";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/force-refresh";

const FavoritesPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  // console.log("results", results);

  return (
    <section>
      <ForceRefresh />
      <div className=" flex flex-col  gap-8">
        <div className="flex justify-betwe en ">
          <h1 className="text-4xl font-bold">Favorite Images </h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage 
            path="/favorites"
              key={result.public_id}
              imageData={result}
              width="400"
              height="300"
              alt="an image of something"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
