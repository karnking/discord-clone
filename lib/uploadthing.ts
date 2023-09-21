import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadThing/core";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();