module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{png,svg,ttf,html,json}"],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 5000000,
};
