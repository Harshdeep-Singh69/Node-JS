//Import events module
var events = require('events');
//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
//Create an event handler as follows
var connectHandler = function connected(){
    console.log('connection succesful.');
    eventEmitter.emit('Harsh');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('Harsh',function(){
    console.log('Data received successfully');

});
eventEmitter.emit('connection');
console.log("Successfully Performed");