var buf = new Buffer.from("Hello Harshdeep");
var json = buf.toJSON(buf);
console.log(json);