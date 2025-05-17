// This file ensures that all public assets are copied to the dist folder
// It is used by the vercel-build script in package.json
const fs = require('fs-extra');
const path = require('path');

async function copyAssets() {
  try {
    // Ensure dist/public directory exists
    const distPublicPath = path.resolve(__dirname, 'dist', 'public');
    await fs.ensureDir(distPublicPath);
    
    // Copy public directory to dist/public
    const publicPath = path.resolve(__dirname, 'public');
    if (fs.existsSync(publicPath)) {
      console.log('Copying public assets to dist/public...');
      await fs.copy(publicPath, distPublicPath, { overwrite: true });
    }
    
    // Copy client/public directory to dist/public
    const clientPublicPath = path.resolve(__dirname, 'client', 'public');
    if (fs.existsSync(clientPublicPath)) {
      console.log('Copying client/public assets to dist/public...');
      await fs.copy(clientPublicPath, distPublicPath, { overwrite: true });
    }
    
    console.log('Asset copying completed successfully.');
  } catch (err) {
    console.error('Error copying assets:', err);
    process.exit(1);
  }
}

copyAssets();
