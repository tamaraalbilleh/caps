'use strict';
require ('dotenv').config();
const storName = process.env.STORENAME;
const faker = require ('faker');
const events = require ('../events.js');

function Order (store){
  this.store = store;
  this.orderID = faker.datatype.uuid ();
  this.customer = faker.name.findName();
  this.address = `${faker.address.cityName()}, ${faker.address.citySuffix()}`;
}

setInterval(() => {
  let obj = new Order (storName);
 
  events.emit('pickup', obj);

}, 5000);// 5 

events.on ('delivered', (payload)=>{
  console.log (`VENDOR: Thank you for delivering ${payload.orderID}`);
});

    
module.exports ={Order};
