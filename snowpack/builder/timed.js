const perf_hooks = require('perf_hooks');
function timed() {
  const start = perf_hooks.performance.now();
  return () => `${Math.round(perf_hooks.performance.now() - start)}ms`;
}

module.exports = timed;
module.exports.timed = timed;
module.exports.default = timed;
