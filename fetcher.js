const request = require("request"); // import request library to make HTTP request
const fs = require("fs"); // import file system to write the file

let commandLine = process.argv.slice(2) // extract command line arguments

let URL = commandLine[0]; // first argument is URL
let filePath = commandLine[1]; // second argument is file path to save download file

request(URL, (error, response, body) => { // make an http request 
  if (error) {
    console.error("Error downloading file:", error); // check if there was error with the request
  }
  fs.writeFile(filePath, body, err => { // save downloaded file to specific path
    if (err) {
      console.error("Error saving file:", err); // check if there was error with saving the file
    } else {
      let bytes = body.length; // if no error, use .length to find byte size (1 char === 1 byte)
      console.log(`Downloaded and saved ${bytes} bytes to ${filePath}`); // print out download/save message incl. file size 
    }
  });

});
