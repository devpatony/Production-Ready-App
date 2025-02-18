// because we are using the server-only import, this file will only be executed on the server, so we can safely import
//  the writeClient here and use it in the after function to update the views count in the database. This way, we can ensure 
// that the views count is always accurate and up-to-date. This is a good example of how we can use the server-only import to 
// run code only on the server and not on the client. This can be useful for running server-side code that should not be exposed to the client, 
// such as updating the database or sending emails. This can help improve the security and performance of our application by running code only where it is needed. 

import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}