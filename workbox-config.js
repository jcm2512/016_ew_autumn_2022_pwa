module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{png,svg,ttf,json,css,js,html}"],
  swDest: "public\\sw.js",
  swSrc: "src/sw.js",
  maximumFileSizeToCacheInBytes: "5000000",
};
