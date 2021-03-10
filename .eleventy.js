module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }
  }
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    return {
      passthroughFileCopy: true
    }
  }
  const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};