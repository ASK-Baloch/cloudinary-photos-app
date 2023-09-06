import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import GalleryGrid from "./gallery-grid";
import SearchForm from "./search-form";

export interface SearchResult {
  public_id: string;
  tags: string[];
}

const GalleryPage = async ({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""} `)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(100)
    .execute()) as { resources: SearchResult[] };

  // console.log("results", results);

  return (
    <section>
      <div className=" flex flex-col gap-8">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold"> Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialsearch={search} />
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
};

export default GalleryPage;
