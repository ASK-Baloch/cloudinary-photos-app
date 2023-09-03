"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchForm = ({initialsearch} : {initialsearch :string}) => {
  const [tagName, setTagName] = useState(initialsearch ?? "");
  const router = useRouter();
  useEffect(()=> {
 setTagName(initialsearch);
  } , [initialsearch])
  return (
    <form
     onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
        router.refresh();
     }}
      >
      <Label htmlFor="tag-name" className="text-right">
        Search for Tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name"
          value={tagName}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
