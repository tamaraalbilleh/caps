'use strict';
require('jest');
const {deliveredHandler} = require ('../caps.js');
const { pickUpHandler } = require ('../caps.js');
const { inTransitHandler }= require ('../caps.js');
const { expect} = require ('@jest/globals');
describe ('caps event handlers test' , ()=>{
  let consoleSpy ;
  beforeEach (()=>{
    consoleSpy = jest.spyOn (console, 'log').mockImplementation();
  });
  afterEach (()=>{
    consoleSpy.mockRestore ();
  });
  let obj = {
    store :'cake-shop',
    orderID : '885666cf-cb5f-4578-ac02-4a7dc7bdc5b2',
    customer : 'Gwendolyn Williamson',
    address : 'jordan',
  };
  it ('should log the pick up event handler', async()=>{
    await pickUpHandler (obj);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it ('should log the in Transit event handler',async()=>{
    await inTransitHandler (obj);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it ('should log the delivered event handler', async()=>{
    await deliveredHandler (obj);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('should trigger the transit event in 1 second', () => {

    inTransitHandler(obj);
    setTimeout(()=>{
      expect(consoleSpy).toHaveBeenCalled();
    },1000);
  });
});
