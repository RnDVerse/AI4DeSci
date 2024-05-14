import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
} as any);

export default config;
