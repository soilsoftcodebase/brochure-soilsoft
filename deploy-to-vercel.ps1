# deploy-to-vercel.ps1
# A PowerShell script to deploy your project to Vercel

Write-Host "Preparing to deploy to Vercel..." -ForegroundColor Cyan

# Step 1: Ensure all dependencies are installed
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Step 2: Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

# Step 3: Verify build output
if (Test-Path -Path "./dist") {
    Write-Host "Build successful! Dist folder created." -ForegroundColor Green
} else {
    Write-Host "Build may have failed. Dist folder not found." -ForegroundColor Red
    exit 1
}

# Step 4: Deploy to Vercel
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
npx vercel --prod

Write-Host "Deployment process completed!" -ForegroundColor Cyan
