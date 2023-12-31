import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const recipesDirectory = path.join(process.cwd(), 'recipes');

export function getSortedRecipesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(recipesDirectory);
  const allRecipesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(recipesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const metaDataArray = matterResult.data.categories.split(',')

    // Combine the data with the id
    return {
      id,
      metaData: metaDataArray,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allRecipesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getRecipeMetadata () {
  const fileNames = fs.readdirSync(recipesDirectory);
  let newArray = [];
  fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(recipesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // console.log(matterResult.data.categories, 'matter result')
    let categories = matterResult.data.categories;
    let combined = categories.split(',')
    combined.map((cat) => {
      newArray.push(cat)
    })

  });
  let uniq = [...new Set(newArray)];
  return uniq
}

export function getAllRecipesIds() {
  const fileNames = fs.readdirSync(recipesDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getRecipeData(id) {
  const fullPath = path.join(recipesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}