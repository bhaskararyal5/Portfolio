// Static export: "npm run build" creates a plain website in the "out" folder,
// which can be hosted on any static host (Render Static Site, Netlify, GitHub Pages...).
// trailingSlash makes every page its own folder (about/index.html), which works everywhere.
module.exports = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
};
