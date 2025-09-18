# Deploy Portfolio to GitHub Pages

Complete guide to deploy your technical writing portfolio to GitHub Pages for free hosting.

## 🚀 Quick Start (5 Minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button → **"New repository"**
3. **Repository name**: `your-username.github.io` (for custom domain) OR any name
4. **Description**: "Technical Writing Portfolio"
5. Set to **Public** (required for free GitHub Pages)
6. **Don't** initialize with README (we have files to upload)
7. Click **"Create repository"**

### Step 2: Upload Your Files
1. **Download** your portfolio files to your computer
2. **Drag and drop** all files into the GitHub repository
3. **Commit message**: "Initial portfolio upload"
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to **Settings** tab in your repository
2. Scroll down to **"Pages"** section (left sidebar)
3. Under **"Source"**, select **"Deploy from a branch"**
4. **Branch**: `main`
5. **Folder**: `/ (root)`
6. Click **"Save"**

### Step 4: Your Site is Live!
- **URL**: `https://your-username.github.io/repository-name`
- **Wait**: 2-5 minutes for deployment
- **Check**: Visit your URL to see your portfolio

## 📁 Files to Upload

### Essential Files (Required):
```
✅ index.html          (your main portfolio file)
✅ Portfolio-data/     (your work files folder)
✅ .nojekyll          (for GitHub Pages compatibility)
```

### Optional Files:
```
📄 profile.css        (if using external version)
📄 profile.js         (if using external version)
📄 PROFILE-README.md  (documentation)
📄 deploy.md          (deployment guide)
```

## 🌐 Repository Setup Options

### Option 1: User/Organization Site
- **Repository name**: `your-username.github.io`
- **URL**: `https://your-username.github.io`
- **Benefits**: Custom domain, shorter URL

### Option 2: Project Site
- **Repository name**: `portfolio` (or any name)
- **URL**: `https://your-username.github.io/portfolio`
- **Benefits**: Multiple projects, organized

## 🔧 Advanced Configuration

### Custom Domain (Optional)
1. **Add CNAME file**:
   ```
   echo "yourdomain.com" > CNAME
   ```
2. **Configure DNS**:
   - Add CNAME record: `yourdomain.com` → `your-username.github.io`
3. **Enable HTTPS**:
   - GitHub Pages automatically provides SSL certificates

### Automatic Deployment
1. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./
   ```

## 📱 Testing Your Deployment

### Local Testing
```bash
# Test locally before uploading
python3 -m http.server 8000
# OR
npx serve .
```

### GitHub Pages Testing
1. **Check deployment status**:
   - Go to repository **Actions** tab
   - Look for green checkmarks
2. **Test all links**:
   - Click every file link
   - Verify PDFs open correctly
   - Check responsive design on mobile

## 🐛 Troubleshooting

### Common Issues

**❌ Site not loading:**
- Check repository is **Public**
- Verify GitHub Pages is **enabled**
- Wait 5-10 minutes for deployment

**❌ Files not found (404 errors):**
- Check file paths in HTML
- Ensure all files are uploaded
- Verify `.nojekyll` file exists

**❌ Styling broken:**
- Check CSS file paths
- Ensure external CDN links work
- Test in different browsers

**❌ PDFs not opening:**
- Verify PDF files are uploaded
- Check file permissions
- Test direct PDF links

### Debug Steps
1. **Check GitHub Actions**:
   - Go to **Actions** tab
   - Look for failed deployments
   - Check build logs

2. **Validate HTML**:
   - Use [W3C HTML Validator](https://validator.w3.org/)
   - Check browser console for errors

3. **Test File Access**:
   - Try accessing files directly via URL
   - Check file permissions

## 🎯 Best Practices

### File Organization
```
your-repo/
├── index.html              (main portfolio)
├── Portfolio-data/         (your work files)
│   ├── DevOps/
│   ├── AWS CloudFormation Templates/
│   ├── API Documentation/
│   └── ...
├── .nojekyll              (GitHub Pages config)
└── README.md              (optional)
```

### Performance Optimization
- **Compress images** before uploading
- **Minify CSS/JS** for faster loading
- **Use relative paths** for all links
- **Test on mobile devices**

### SEO Optimization
- **Add meta tags** to HTML head
- **Use descriptive titles**
- **Include alt text** for images
- **Add structured data** (optional)

## 📊 Analytics (Optional)

### Google Analytics
Add to your HTML `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GitHub Pages Analytics
- Go to repository **Settings** → **Pages**
- Enable **"GitHub Pages site analytics"**

## 🔄 Updates and Maintenance

### Making Updates
1. **Edit files** locally
2. **Upload changes** to GitHub
3. **Commit** with descriptive message
4. **Changes deploy automatically**

### Backup Strategy
- **GitHub repository** serves as backup
- **Clone locally** for offline access
- **Use GitHub's built-in backup** features

## 📞 Support Resources

### GitHub Pages Documentation
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-github-pages)

### Community Help
- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

## 🎉 Success Checklist

- [ ] Repository created and public
- [ ] All files uploaded successfully
- [ ] GitHub Pages enabled
- [ ] Site loads at correct URL
- [ ] All file links work
- [ ] Responsive design works on mobile
- [ ] PDFs open correctly
- [ ] Custom domain configured (optional)
- [ ] Analytics set up (optional)

---

**Your portfolio will be live at:** `https://your-username.github.io/repository-name`

**Need help?** Check the troubleshooting section or GitHub Pages documentation.

Happy deploying! 🚀
