module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/example_collection");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/projects");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: ["njk", "html", "md"],
  };
};
