module.exports = {
  process(src, filename) {
    return "module.exports = {};";
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
