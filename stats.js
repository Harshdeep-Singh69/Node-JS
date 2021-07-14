//Stats is used to get the description of a file
var fs = require('fs');
fs.stat('try.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);

// these two lines help us to tell whether the given document is a file or a directory   
console.log("isFile?" + stats.isFile());
console.log("isDirectory?" + stats.isDirectory());
});