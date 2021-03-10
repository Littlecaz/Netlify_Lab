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
