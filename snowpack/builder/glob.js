// Cross platform fast-glob

const glob = require('fast-glob');
const path = require('path');

/**
 * @param {string} pathPattern
 * @returns {string[]}
 */
exports.globSync = (pathPattern) => {
  if (path.sep !== path.posix.sep) {
    // fast-glob only works with posix paths
    return glob.sync(pathPattern.split(path.sep).join(path.posix.sep));
  } else {
    return glob.sync(pathPattern);
  }
};
/**
 * @param {string} pathPattern
 * @returns {Promise<string[]>}
 */
exports.glob = (pathPattern) => {
  if (path.sep !== path.posix.sep) {
    // fast-glob only works with posix paths
    return glob(pathPattern.split(path.sep).join(path.posix.sep));
  } else {
    return glob(pathPattern);
  }
};
