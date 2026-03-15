# rosiechen.github.io

My personal portfolio site. Made with React and ChakraUI – hosted on Github Pages.

Feel free to take inspiration. If you plan on using my site as a template, please give credit.

## Deploy (get https://rosiechen1005.github.io working)

1. **Deploy the built site** (from this project folder):
   ```bash
   npm run deploy:pages
   ```
   If you get a permission or auth error, log in to GitHub (e.g. `gh auth login` or use a personal access token). The script pushes the `build` folder to the **gh-pages** branch of `rosiechen1005/rosiechen1005.github.io`.

2. **Turn on GitHub Pages** (required or the site will 404):
   - Open **https://github.com/rosiechen1005/rosiechen1005.github.io**
   - **Settings** → **Pages** (left sidebar)
   - Under **Build and deployment**, **Source** = **Deploy from a branch**
   - **Branch** = `gh-pages`, **Folder** = `/ (root)` → **Save**
   - Wait 1–2 minutes; the site will be at **https://rosiechen1005.github.io**

**Alternative (use main branch):** run `npm run deploy:pages:main`, then in Settings → Pages choose **Branch**: `main`, **Folder**: `/ (root)`. 
