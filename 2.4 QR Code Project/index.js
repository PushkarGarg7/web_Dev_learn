/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inq from "inquirer";
import fs from "fs";
import qr from "qr-image";


inq
  .prompt([{
    message:"type in url",
    name:"URL"
  },
    
  ])
  .then((answers) => {
    console.log(answers.URL);
    var qr_svg=qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
  })
  ;