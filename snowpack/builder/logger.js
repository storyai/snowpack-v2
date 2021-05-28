/**
 * @param {string} prefix to use as a prefix
 * @returns {(...args: any[]) => void}
 */
function logger(prefix) {
  return console.error.bind(console, `\u001b[2m${prefix}\u001b[0m`);
}

module.exports = logger;
module.exports.logger = logger;
module.exports.default = logger;
