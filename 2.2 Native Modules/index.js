const fs=require("fs");
// fs.writeFile("message.txt","hello from nodejs",(err) => {
//     if (err) throw err;
//     console.log("file saved");
// });
fs.readFile("message.txt","utf-8",(err,data) => {
    if(err) throw err;
    console.log(data);

});