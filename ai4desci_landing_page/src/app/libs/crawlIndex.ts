import algoliasearch from "algoliasearch";
import { load } from "cheerio";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID ?? "";
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ?? "";
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX ?? "";

export const structuredAlgoliaHtmlData = async ({
  pageUrl = "",
  htmlString = "",
  title = "",
  type = "",
  imageURL = "",
}) => {
  try {
    const c$ = load(htmlString).text();
    const data = {
      objectID: pageUrl,
      title: title,
      url: pageUrl,
      content: c$.slice(0, 7000),
      type: type,
      imageURL: imageURL,
      updatedAt: new Date().toISOString(),
    };

    await addToAlgolia(data);
    return data;
  } catch (error) {
    console.log("error in structuredAlgoliaHtmlData", error);
  }
};

async function addToAlgolia(record: any) {
  try {
    const client = algoliasearch(APP_ID, API_KEY);
    const index = client.initIndex(INDEX);

    await index.saveObject(record, {
      autoGenerateObjectIDIfNotExist: true,
    });
  } catch (error) {
    console.log("error in addToAlgolia", error);
  }
}
