#! /usr/bin/env node

const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const { copyDir } = require("./utils/copydir");
const { logger } = require("./utils/logger");

const copyRecursive = (source, target) => {
  fs.copyFileSync(source, target);
};

const main = () => {
  const program = new Command()
    .name("express-typescript")
    .description("Create express typescript template")
    .argument("<target>", "Target Directory")
    .action(async (target) => {
      try {
        copyDir(path.join(__dirname, "template", "main-template"), target);
        logger.success(`\nSuccess, next step:\n`);
        logger.info(`cd ${target} && npm install`);
        process.exit(0);
      } catch (error) {
        logger.error(error);
        process.exit(1);
      }
    })
    .version("1.0.0", "-v, --version", "display the version number");
  program.parse();
};
main();
