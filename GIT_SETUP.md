# Git Setup Instructions

Follow these steps to push your portfolio to GitHub:

## First-time setup

1. Initialize a git repository in your project folder:
   ```
   git init
   ```

2. Add your files to git:
   ```
   git add .
   ```

3. Make your first commit:
   ```
   git commit -m "Initial commit: Portfolio website"
   ```

4. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., "portfolio")
   - Do not initialize with README, .gitignore, or license
   - Click "Create repository"

5. Link your local repository to the GitHub repository:
   ```
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   ```

6. Push your code to GitHub:
   ```
   git push -u origin main
   ```
   If your default branch is named "master" instead of "main", use:
   ```
   git push -u origin master
   ```

## Subsequent updates

After making changes to your portfolio:

1. Add your changes:
   ```
   git add .
   ```

2. Commit your changes with a descriptive message:
   ```
   git commit -m "Description of changes made"
   ```

3. Push to GitHub:
   ```
   git push
   ```

## Deploying your portfolio

Consider deploying your portfolio using one of these services:

- **GitHub Pages**: Free hosting directly from your repository
- **Vercel**: Excellent for React applications, with free tier
- **Netlify**: Another great option with a generous free tier

For GitHub Pages:

1. Install gh-pages if not already included:
   ```
   npm install --save-dev gh-pages
   ```

2. Add/update these scripts in package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy your site:
   ```
   npm run deploy
   ```

4. Configure GitHub Pages to use the gh-pages branch in your repository settings.