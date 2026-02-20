# AWS Deployment Guide - Sachin's Portfolio

Follow these steps to host your React portfolio on AWS using a production-ready architecture.

## 1. Prerequisites
- AWS Account
- Domain name (Route 53 or external)
- GitHub Repository

## 2. Infrastructure Setup

### S3 Bucket (Static Hosting)
1. Create an S3 Bucket (e.g., `sachincs-portfolio`).
2. **Disable** "Block all public access" (Temporary, we will use CloudFront OAC later).
3. Enable "Static website hosting" in Properties.
4. Set `index.html` as both Index and Error document.

### CloudFront (CDN & SSL)
1. Create a Distribution.
2. Select your S3 bucket as Origin.
3. **Origin Access:** Use "Origin access control settings (recommended)" to restrict direct S3 access.
4. **Viewer:** Redirect HTTP to HTTPS.
5. **Default Root Object:** `index.html`.
6. **SSL Certificate (ACM):** Request a public certificate in `us-east-1` for your domain.

## 3. GitHub CI/CD Setup
1. Go to your GitHub Repo Settings > Secrets and Variables > Actions.
2. Add the following secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `S3_BUCKET_NAME`
   - `CLOUDFRONT_DISTRIBUTION_ID`

## 4. Automation Workflow
The project includes a `.github/workflows/deploy.yml` file. Every time you push to the `main` branch:
1. The code is built using `npm run build`.
2. The `dist/` folder is synced to S3.
3. The CloudFront cache is invalidated to show the newest changes immediately.

## 5. Performance Optimization
- **Lighthouse Score:** Ensure images are in WebP format.
- **Minification:** Vite automatically minifies JS/CSS.
- **Gzip/Brotli:** Enable on CloudFront for better transfer speeds.

## 6. Security Best Practices
- **Least Privilege:** Create an IAM user specifically for GitHub Actions with only `s3:Sync` and `cloudfront:CreateInvalidation` permissions.
- **WAF:** Consider adding AWS WAF if you expect high traffic or want to block specific regions.
