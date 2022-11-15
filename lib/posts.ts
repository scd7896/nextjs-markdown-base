import html from 'remark-html';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remarkParse from 'remark-parse';
import { remark } from 'remark';


export async function getPostData(id: string) {
  const fullPath = path.join('public', "posts", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(html, {sanitize: false})
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}