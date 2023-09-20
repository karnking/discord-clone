import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Route
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});