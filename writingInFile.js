var fs = require('fs');
fs.writeFile('try.txt','Hello Everyone we are writing our data here',function(err,data){
    if(err){
        return console.error(err);
    }
console.log("Data written successfully");
console.log("lets read newly written data");
fs.readFile('try.txt',function(err,data){
    if(err){
        return console.error(err);
    }
console.log("Achronous read:" + data.toString());
});
}); 