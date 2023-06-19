import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
  // read posts list
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // parsing grey-matter data from each post file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      // date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });
  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  // return slugs;

  return posts;
};

export default getPostMetadata;