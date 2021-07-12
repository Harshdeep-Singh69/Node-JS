/*If we want to open a file and want to generate error or a message 
depending upon the opening of the file then we can pass r+ */
var fs = require("fs");
fs.open('harsh.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('File opened successfully!');
});