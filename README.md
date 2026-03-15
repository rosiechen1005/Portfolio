# rosiechen.github.io

My personal portfolio site. Made with React and ChakraUI – hosted on Github Pages.

Feel free to take inspiration. If you plan on using my site as a template, please give credit.

## Deploy (get https://rosiechen1005.github.io working)

**Important:** Pushing to `main` only updates the repo. The live site is served from the **gh-pages** branch. After any change you want to see on the site, you must run the deploy step below.

1. **Build and deploy the site** (run this after editing the portfolio):
   ```bash
   npm run deploy:site
   ```
   Or in two steps: `npm run build` then `npm run deploy:pages`. This pushes the `build` folder to the **gh-pages** branch of `rosiechen1005/rosiechen1005.github.io`.

2. **Turn on GitHub Pages** (required or the site will 404):
   - Open **https://github.com/rosiechen1005/rosiechen1005.github.io**
   - **Settings** → **Pages** (left sidebar)
   - Under **Build and deployment**, **Source** = **Deploy from a branch**
   - **Branch** = `gh-pages`, **Folder** = `/ (root)` → **Save**
   - Wait 1–2 minutes; the site will be at **https://rosiechen1005.github.io**

**Alternative (use main branch):** run `npm run deploy:pages:main`, then in Settings → Pages choose **Branch**: `main`, **Folder**: `/ (root)`. 
