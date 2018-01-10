var fs = require('fs');

function base64EncodeImage(url, imageType) {
  const data = fs.readFileSync(url, 'base64');
  return `data:image/${imageType};base64,${data}`;
}

const dataUri = base64EncodeImage('./src/images/img.png', 'png');

console.log(dataUri);
