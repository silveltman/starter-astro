// --------------------------
// A script to save all remote images in a astro content collection locally
// --------------------------

import { promises as fsPromises } from 'fs'
import fs from 'fs'
import crypto from 'crypto'
import { sync as glob } from 'glob'

const MARKDOWN_FILES = glob('./src/content/**/*.md')
const OUTPUT_BASE = './public/'
const OUTPUT_DIR= 'remote-local'
const FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'avif']

// Check if the OUTPUT_DIR exists, if not, then create it
if (!fs.existsSync(OUTPUT_BASE + OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_BASE + OUTPUT_DIR, { recursive: true });
}

// Get markdown content as string
function getMarkdownContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

// Extract all external urls from markdown content
function extractImageUrls(contentString) {
  const regex = /(https?:\/\/[^\s]+)/g
  const matches = contentString.matchAll(regex)
  const urls = [...matches].map((match) => match[1])
  const imageUrls = urls.filter((url) => hasFileExtension(url))
  return imageUrls
}

// Get file extension from url
function getFileExtension(url) {
  return FILE_EXTENSIONS.find((extension) =>
    url.toLowerCase().includes(`.${extension.toLowerCase()}`)
  )
}

// Check if url has a file extension sepcified in FILE_EXTENSIONS
function hasFileExtension(url) {
  return FILE_EXTENSIONS.some((extension) =>
    url.toLowerCase().includes(`.${extension.toLowerCase()}`)
  )
}

// Download image from url and save to OUTPUT_DIR
async function downloadImage(url) {
  const extension = getFileExtension(url)
  const randomString = crypto.randomBytes(16).toString('hex')
  const filename = `${randomString}.${extension}`
  const outputPath = `${OUTPUT_BASE}${OUTPUT_DIR}/${filename}`

  const response = await fetch(url)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  await fsPromises.writeFile(outputPath, buffer)
  return `/${OUTPUT_DIR}/${filename}`
}

// Run all: get markdown content, extract image urls, download images and update markdown content
async function runAll(filePath) {
  console.log(`▶ ${filePath}`);

  const content = getMarkdownContent(filePath)
  const urls = extractImageUrls(content)
  let newContent = content
  for (const url of urls) {
    const newUrl = await downloadImage(url)
    newContent = newContent.replace(url, newUrl)

    console.log(`  ✔ ${newUrl} >> ${newUrl}`);
  }
  fs.writeFileSync(filePath, newContent)
}

console.log(`
----------------------------------------

🚀 Starting remote-local script 🚀
Saving remote images in astro content collections locally

----------------------------------------
`);
// Run script for all markdown files
MARKDOWN_FILES.forEach((filePath) => {
  runAll(filePath)
})
