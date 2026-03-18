import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return {
    slug: realSlug,
    content: fileContents,
  };
}