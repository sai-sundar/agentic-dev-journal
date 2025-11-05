import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get title from command line args
const title = process.argv.slice(2).join(' ');

if (!title) {
  console.error('❌ Please provide a title for your post');
  console.log('Usage: npm run new-post "Your Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

// Get current date
const date = new Date().toISOString().split('T')[0];

// Create filename
const filename = `${date}-${slug}.md`;

// Template
const template = `---
title: "${title}"
description: "Description of your post"
date: ${date}
tags: ["tag1", "tag2"]
draft: false
---

## Introduction

Your content here...

## Main Points

More content...

## Conclusion

Wrap up...
`;

// Write file
const postsDir = path.join(__dirname, '..', 'src', 'content', 'journal');
const filepath = path.join(postsDir, filename);

if (fs.existsSync(filepath)) {
  console.error(`❌ File already exists: ${filename}`);
  process.exit(1);
}

fs.writeFileSync(filepath, template);

console.log(`✅ Created new post: ${filename}`);
console.log(`📝 Edit it at: src/content/journal/${filename}`);
