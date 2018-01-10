const sass = require('node-sass');
const fs = require('fs');
const fileType = require('file-type');

const asyncBase64Encode = (url, cb) => {
  fs.readFile(url, (err, data) => {
    if (err) throw err;

    const { mime } = fileType(data);
    const encodedString = new Buffer(data).toString('base64');

    cb(`data:${mime};base64,${encodedString}`);
  });
};

module.exports = {
  'encodeDataUri($url)': function(url, done) {
    asyncBase64Encode(url.getValue(), (dataUri) => {
      const out = new sass.types.String(dataUri);
      done(out);
    });
  },
};
