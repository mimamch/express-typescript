const chalk = require("chalk");

exports.logger = {
  error(...args) {
    console.log(chalk.red(...args));
  },
  warn(...args) {
    console.log(chalk.yellow(...args));
  },
  info(...args) {
    console.log(chalk.cyan(...args));
  },
  success(...args) {
    console.log(chalk.green(...args));
  },
};