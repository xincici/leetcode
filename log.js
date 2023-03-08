require('./g-array-tree');
require('./g-array-list');
const chalk = require('chalk');
global._ = require('lodash');

String.prototype.at = String.prototype.at || function(idx) {
  if (idx >= 0) return this[idx];
  return this[this.length + idx];
};
Array.prototype.at = Array.prototype.at || function(idx) {
  if (idx >= 0) return this[idx];
  return this[this.length + idx];
};

const stdout = v => {
  if (!v) return v;
  if (Array.isArray(v)) return v;
  if (typeof v === 'object') return JSON.stringify(v, null, 2);
  return v;
};

global.log = function log() {
  const args = Array.from(arguments);
  const fn = args.pop();
  console.log(chalk.red('input:'));
  console.log(stdout(args.length > 1 ? args : args[0]));
  console.log(chalk.green('output:'));
  console.log(stdout(fn.apply(null, args)));
  console.log(chalk.blue('======================================'));
};

