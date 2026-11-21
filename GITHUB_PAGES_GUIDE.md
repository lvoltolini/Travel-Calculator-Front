# GitHub Pages Deployment Guide

## 📋 Overview

Your Angular Travel Calculator app is now configured for automatic deployment to GitHub Pages. This guide explains how to set it up and keep it updated.

## ✅ What's Been Done

✓ **Password Generator Component** - Added with features to:
  - Generate secure passwords with customizable options
  - Save passwords locally in browser (localStorage)
  - Control: uppercase, lowercase, numbers, special characters
  - Adjust password length (8-128 characters)
  - Copy/paste saved passwords

✓ **Base Href Configured** - Updated to `/Travel-Calculator-Front/` for correct routing

✓ **GitHub Actions Workflow** - Automatic deployment on every push

✓ **Updated README** - Full documentation included

## 🚀 Initial Setup (One-Time)

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/lvoltolini/Travel-Calculator-Front
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root`
   - Click **Save**

### Step 2: Commit and Push Changes

```bash
# Navigate to your project folder
cd E:\WORKSPACE\2026\Travel-Calculator-Front

# Check status
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Add password generator and configure GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 3: Wait for Deployment

1. Go to your repository → **Actions** tab
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (green checkmark = success) ⏳
4. This takes about 1-2 minutes

### Step 4: Access Your Live App

Once deployment completes, your app will be live at:

```
https://lvoltolini.github.io/Travel-Calculator-Front/
```

**Bookmark this URL!** Share it with others.

---

## 📝 Updating Your App

Whenever you make changes:

### Quick Update Process

```bash
# 1. Make your changes in VS Code
# 2. Terminal: Stage changes
git add .

# 3. Terminal: Commit
git commit -m "Describe your changes here"

# 4. Terminal: Push
git push origin main
```

That's it! GitHub Actions will automatically:
- ✅ Build your app
- ✅ Run tests (if configured)
- ✅ Deploy to GitHub Pages
- ✅ Update your live site

You can monitor progress in the **Actions** tab.

---

## 🔧 Manual Build & Test (Local)

### Test Locally Before Pushing

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
```

Visit `http://localhost:4200/` and test your changes.

### Build Production Version

```bash
# Create optimized production build
npm run build
```

The built files appear in `dist/Travel-Calculator-Front/browser/`

---

## 💾 Password Generator - Browser Storage

**Important:** All saved passwords are stored **locally on your device** using browser localStorage:

- ✅ **Secure** - Not sent to any server
- ✅ **Private** - Only you can access them
- ⚠️ **Device-specific** - Different devices = different stored passwords
- ⚠️ **Persistent** - Survive browser restart but can be cleared

### Users Can:
- Generate passwords with custom rules
- Save favorites locally
- Copy saved passwords with one click
- Clear all saved passwords anytime
- View all saved passwords

---

## 🎯 Workflow Summary

```
Your Code Changes
        ↓
    git push
        ↓
GitHub Actions Triggered
        ↓
├─ npm install (dependencies)
├─ npm run build (create app)
└─ Deploy to gh-pages branch
        ↓
GitHub Pages Updated
        ↓
✅ Live at https://lvoltolini.github.io/Travel-Calculator-Front/
```

---

## 🆘 Troubleshooting

### "Build Failed" in Actions

1. Go to **Actions** tab
2. Click the failed workflow
3. Click **build** job
4. Scroll down to see the error message
5. Common fixes:
   - Check for TypeScript errors: `npx tsc --noEmit`
   - Run build locally: `npm run build`
   - Check for missing components

### Site Not Updating

- GitHub Pages can take 1-2 minutes to update
- Try a hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Clear browser cache

### "Cannot find module" Errors

```bash
# Reinstall dependencies
npm install
npm run build
```

---

## 📚 File Structure

```
Travel-Calculator-Front/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Deployment automation
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── screen-size/
│   │   │   ├── unit-converter/
│   │   │   └── password-generator/ ← NEW!
│   │   ├── app.ts
│   │   └── app.html
│   ├── index.html              ← base href: /Travel-Calculator-Front/
│   └── styles.scss
├── package.json
├── angular.json
├── README.md
└── dist/                       ← Build output (don't commit)
    └── Travel-Calculator-Front/
        └── browser/            ← This is deployed to GitHub Pages
```

---

## 🔐 Security Notes

- ✅ All passwords generated locally (never sent to server)
- ✅ No backend server or API calls
- ✅ Open source - anyone can review the code
- ✅ Browser localStorage only - no cloud storage

---

## 🎓 Learning Resources

- [Angular Documentation](https://angular.dev/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Bootstrap Components](https://getbootstrap.com/docs/)

---

## 🚨 Important Notes

### Before Pushing to Production

1. **Test locally first**:
   ```bash
   npm start
   # Test at http://localhost:4200/
   ```

2. **Build and verify**:
   ```bash
   npm run build
   # Check dist/Travel-Calculator-Front/browser/
   ```

3. **Then push**:
   ```bash
   git push origin main
   ```

### Git Best Practices

```bash
# Always check status before committing
git status

# See what changed
git diff

# Commit with meaningful messages
git commit -m "Add password generator component"

# Not: git commit -m "stuff"
```

---

## 📞 Quick Reference

```bash
# Start development
npm start

# Build for production
npm run build

# Run tests
npm test

# See all available commands
npm run
```

---

**You're all set! 🎉 Your app is now automatically deployed to GitHub Pages!**

Any changes you push to `main` will be live within 1-2 minutes.
