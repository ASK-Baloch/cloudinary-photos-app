import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open ,setOpen ] = useState(false)
   
  return (
    <div className="  absolute top-2 right-2 ">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="h-8 w-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            {/* <FolderPlus className="mr-2 h-4 w-4" />
            <span>Add to Album</span> */}
            <AddToAlbumDialog image={image} onClose={()=> setOpen(false)}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ); 
}
