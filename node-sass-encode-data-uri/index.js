const sass = require('node-sass');
const fs = require('fs');
const fileType = require('file-type');

const base64EncodeImage = (url) => {
  const binary = fs.readFileSync(url);
  const { mime } = fileType(binary);
  const encodedString = new Buffer(binary).toString('base64');

  return `data:${mime};base64,${encodedString}`;
};

module.exports = {
  'encodeDataUri($url)': function(url) {
    const dataUri = base64EncodeImage(url.getValue());
    const out = new sass.types.String(dataUri);

    return out;
  },
};
