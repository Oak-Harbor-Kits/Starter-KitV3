


module.exports = function(eleventyConfig) {

  // Pass through assets icons TODO: Move icon files to icn folder and amend links.
  eleventyConfig.addPassthroughCopy("./src/*.png");
  eleventyConfig.addPassthroughCopy("./src/*.ico");
  eleventyConfig.addPassthroughCopy("./src/*.xml");
  eleventyConfig.addPassthroughCopy("./src/*.webmanifest");
  // Pass through assets CSS, fonts, images, JS :
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fnt");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/js");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};
