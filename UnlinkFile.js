var fs = require("fs");
fs.unlink('try.txt',function(err,close){
    if(err){
        return console.error(err);
    }
    console.log('File deleted successfully!');
});