# TravelCalculatorFront

A collection of useful tools for travelers built with Angular 21.

**Live Demo:** https://lvoltolini.github.io/Travel-Calculator-Front/

## Features

- **Screen Size Calculator**: Calculate screen dimensions and resolutions
- **Unit Converter**: Convert between different measurement units
- **Password Generator**: Generate secure passwords with customizable options and save them locally in your browser

All saved data (passwords) is stored locally in your browser using localStorage - nothing is sent to any server.

## Development server

To start a local development server, run:

```bash
npm install
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building for Production

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages whenever you push to the `main` or `master` branch.

### First Time Setup:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose the branch: `gh-pages`
   - Click Save

2. **Push to trigger deployment**:
   ```bash
   git add .
   git commit -m "Add password generator and GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to your repository → Actions
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once it completes (green checkmark), your app is live at:
   ```
   https://[your-username].github.io/Travel-Calculator-Front/
   ```

### Updating the Project:

After making changes:

```bash
# Stage your changes
git add .

# Commit with a meaningful message
git commit -m "Your commit message"

# Push to main/master branch
git push origin main
```

The GitHub Actions workflow will automatically:
1. ✅ Install dependencies
2. ✅ Build the project
3. ✅ Deploy to `gh-pages` branch
4. ✅ Update your live GitHub Pages site

### How GitHub Actions Deployment Works:

The `.github/workflows/deploy.yml` file:
- **Triggers** on every push to `main` or `master`
- **Builds** the Angular app with `npm run build`
- **Uploads** the compiled files to the `gh-pages` branch
- **Deploys** automatically to GitHub Pages

You don't need to do anything manually - just push your code!

## Running Tests

To execute unit tests with [Vitest](https://vitest.dev/), use:

```bash
npm test
```

## Code Scaffolding

Generate new components:

```bash
ng generate component component-name
```

For more schematics:

```bash
ng generate --help
```

## Browser Storage

The Password Generator stores saved passwords in your browser's localStorage:
- Data is **only** stored locally on your device
- **Not** sent to any server
- Persists across browser sessions
- Can be cleared by clicking "Clear All Passwords"

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── screen-size/        # Screen Size Calculator
│   │   ├── unit-converter/      # Unit Converter
│   │   └── password-generator/  # Password Generator
│   ├── app.ts                   # Main app component
│   └── app.html                 # Main layout
├── assets/                      # Static assets
└── index.html                   # Entry point
```

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

