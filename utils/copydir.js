const fs = require("fs");
const path = require("path");
const { logger } = require("./logger");
/**
 * Copy the src folder to the dest folder
 * @param {string} src
 * @param {string} dest
 * @param {function} callback
 */
exports.copyDir = (src, dest) => {
  const copy = (copySrc, copyDest) => {
    const list = fs.readdirSync(copySrc);
    list.forEach((item) => {
      const ss = path.resolve(copySrc, item);
      const stat = fs.statSync(ss);
      const curSrc = path.resolve(copySrc, item);
      const curDest = path.resolve(copyDest, item);
      if (stat.isFile()) {
        // file, copy directly
        // fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
        fs.copyFileSync(curSrc, curDest);
      } else if (stat.isDirectory()) {
        // directory, recursively
        fs.mkdirSync(curDest, { recursive: true });
        copy(curSrc, curDest);
      }
    });
  };

  if (!fs.existsSync(dest)) {
    logger.info("\nCreating target directory...");
    fs.mkdirSync(dest, { recursive: true });
  }
  logger.info("\nCopying files...");
  copy(src, dest);
};
