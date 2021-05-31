'use strict';
const events = require ('./events.js');
require ('./modules/driver.js');
require ('./modules/vendor.js');
require ('dotenv').config();

events.on('pickup', pickUpHandler); //
events.on('in-transit', inTransitHandler); //
events.on('delivered', deliveredHandler); //

function pickUpHandler (payload){
  let obj = {
    event : 'pickup',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, obj);
}

function inTransitHandler (payload){
  let obj = {
    event : 'in-transit',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, obj);
}

function deliveredHandler (payload){
  let obj = {
    event : 'delivered',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, obj);
}

module.exports = {
  pickUpHandler : pickUpHandler,
  inTransitHandler : inTransitHandler,
  deliveredHandler: deliveredHandler,
};