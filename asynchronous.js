var fs = require("fs");
fs.readFile('synchronousfile.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("Harshdeep Singh");
console.log("hello");