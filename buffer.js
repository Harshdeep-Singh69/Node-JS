/* Used to give temporary memory and we can later on delete that whenever we want */

//Writing buffer
buf=new Buffer.alloc(256);
len=buf.write("Hello everyone");
console.log("Octets written : " + len);

//Reading buffer
buf=new Buffer.alloc(22);
for (var i = 0; i < 22; i++) {
    buf[i] = i+97;
    
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

//copying buffer method 1
buf1 = new Buffer.alloc(20);
buf2 = new Buffer.alloc(20);
buf1.write("Text for Buffer 1");
buf1.copy(buf2);
console.log(buf2.toString());
//copying buffer method 2
buf1 = new Buffer.from("Text here");
buf2 = new Buffer.alloc(20);
buf1.copy(buf2);
console.log(buf2.toString());
