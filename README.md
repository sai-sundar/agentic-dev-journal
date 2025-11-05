# Dev Journal - Coding with AI Agents

A minimal, clean dev journal built with [Astro](https://astro.build) to document my journey exploring AI agents, LLM integrations, and modern software development.

🌐 **Live Site**: [https://sai-sundar.github.io/agentic-dev-journal](https://sai-sundar.github.io/agentic-dev-journal)

## Features

- 📝 **Markdown-based** - Write entries in simple markdown files
- 🎨 **Clean Design** - Minimal, distraction-free reading experience
- 🌙 **Dark Mode** - Automatic dark/light theme based on system preferences
- 🏷️ **Tag System** - Organize and filter entries by topics
- 📱 **Responsive** - Works great on all devices
- ⚡ **Fast** - Built with Astro for optimal performance
- 🔍 **SEO Ready** - Automatic sitemap and RSS feed generation
- 🚀 **Auto Deploy** - Push to main branch and GitHub Actions handles the rest

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Creating a New Journal Entry

**Option 1: Use the helper script (recommended)**

```bash
npm run new-post "Your Post Title"
```

This creates a new markdown file with today's date and the proper frontmatter template.

**Option 2: Manual creation**

Create a new file in `src/content/journal/` with the format: `YYYY-MM-DD-slug.md`

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: 2024-11-05
tags: ["ai-agents", "learning"]
draft: false
---

## Your Content Here

Write your journal entry using markdown...
```

### Frontmatter Fields

- `title` (required): The title of your entry
- `description` (required): Short description (shown in listings)
- `date` (required): Publication date (YYYY-MM-DD)
- `tags` (optional): Array of tags for categorization
- `draft` (optional): Set to `true` to hide from production

## Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to your repo Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Add new journal entry"
   git push origin main
   ```

3. **Automatic deployment**:
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab to monitor progress
   - Site will be live at: `https://YOUR-USERNAME.github.io/agentic-dev-journal`

### First Deployment

After setting up GitHub Pages, you can trigger the first deployment by:

```bash
git add .
git commit -m "Initial setup"
git push origin main
```

The GitHub Actions workflow will automatically:
- Install dependencies
- Build the site
- Deploy to GitHub Pages

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── favicon.svg             # Site favicon
├── scripts/
│   └── new-post.js            # Helper to create new posts
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── journal/           # Your journal entries (markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Main site layout
│   │   └── JournalPost.astro  # Individual post layout
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.md           # About page
│   │   ├── rss.xml.js         # RSS feed
│   │   ├── journal/
│   │   │   ├── index.astro    # Archive page
│   │   │   └── [slug].astro   # Individual entry page
│   │   └── tags/
│   │       └── [tag].astro    # Tag filter page
│   └── styles/
│       └── global.css         # Global styles
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

## Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview built site locally |
| `npm run new-post "Title"` | Create a new journal entry |

## Customization

### Change Site Title/Description

Edit the frontmatter in:
- `src/pages/index.astro` - Homepage title and intro
- `src/layouts/BaseLayout.astro` - Default meta description

### Change Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --accent: #0066cc;
  /* ... */
}
```

### Update About Page

Edit `src/pages/about.md` with your information.

## Writing Tips

- Use descriptive titles that capture the main idea
- Keep descriptions concise (1-2 sentences)
- Tag consistently to build useful categories
- Use code blocks with syntax highlighting
- Add images to `public/` and reference them
- Set `draft: true` while working on entries

## RSS Feed

An RSS feed is automatically generated at:
```
https://sai-sundar.github.io/agentic-dev-journal/rss.xml
```

Readers can subscribe to get updates when you publish new entries.

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Fast, content-focused web framework
- **Content**: Markdown with frontmatter
- **Styling**: Vanilla CSS with CSS custom properties
- **Deployment**: GitHub Pages via GitHub Actions
- **Runtime**: Static site generation (SSG)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

Built with ❤️ using Astro and inspired by the vibrant dev community exploring AI agents and modern development workflows.

---

**Happy journaling!** 📖✨
