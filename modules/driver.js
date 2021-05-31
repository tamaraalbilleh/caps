'use strict';
const events = require ('../events.js');
events.on ('pickup', pickUpHandler);

function pickUpHandler (payload){
  setTimeout(() => {
    console.log (`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
    
  }, 1000);
  setTimeout(() => {
    console.log (`DRIVER: delivered up ${payload.orderID}`);
    events.emit(`delivered`, payload);
  }, 3000);
}
module.exports = pickUpHandler;
