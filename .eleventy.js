


module.exports = function(eleventyConfig) {

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
