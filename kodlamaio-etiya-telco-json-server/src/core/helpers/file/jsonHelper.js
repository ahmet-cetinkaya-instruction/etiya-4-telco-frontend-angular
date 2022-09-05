const fs = require('fs');

const readJsonFile = filePath => {
  let rawData = fs.readFileSync(filePath);
  let objectData = JSON.parse(rawData);
  return objectData;
};

module.exports = {
  readJsonFile
};
