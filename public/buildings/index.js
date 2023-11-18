/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const readFilesPNG = () => {
  const directoryPath = path.join(__dirname);
  const files = fs.readdirSync(directoryPath);
  return files;
};

(() => {
  const files = readFilesPNG();

  const filesFiltered = files.filter(file => {
    return file.includes(".png");
  });

  filesFiltered.forEach(file => {
    const strWithoutSpaces = file.replace(/\s/g, "_").toLowerCase();
    const strWithoutNoBackground = strWithoutSpaces.replace(
      /_no_background/g,
      "",
    );
    const strWithoutRawImage = strWithoutNoBackground.replace(
      /_raw_image/g,
      "",
    );

    console.log(`Renaming ${file} to ${strWithoutRawImage}`);

    fs.renameSync(file, strWithoutRawImage);
  });
})();
