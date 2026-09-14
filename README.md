# kevinarevalo.github.io

A static GitHub Pages version of the current `kevinarevalo` WordPress site.

## Files
- `index.html` — homepage
- `styles.css` — layout and responsive styling
- `script.js` — mobile navigation
- `assets/` — self-contained visual assets

## Publish on GitHub Pages
1. Create a GitHub repository named `kevinarevalo.github.io`.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Open `https://kevinarevalo.github.io`.

## Important
This is a static conversion. WordPress/PHP, the WordPress dashboard, plugins, and MySQL are not required for this version.

The page structure, navigation, copy, colors, and layout direction were based on the supplied WordPress SQL export and homepage screenshot. The database references Astra starter-content assets and a Poppins body font. Because the uploaded ZIP was not machine-readable in this environment, this package uses self-contained replacement SVG assets for the referenced visual areas instead of hotlinking the local WordPress files. You can swap those files with the originals later if you want a pixel-closer match.
