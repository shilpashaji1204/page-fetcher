const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else if (response.statusCode !== 200) {
    console.log('HTTP Error:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log('Error saving file:', error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});