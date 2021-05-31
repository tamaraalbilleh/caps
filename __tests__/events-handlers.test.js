'use strict';
const events =require('../events.js');
describe('testing event handlers', ()=> {
  let consoleSpy;
  let obj = {
    store :'cake-shop',
    orderID : '885666cf-cb5f-4578-ac02-4a7dc7bdc5b2',
    customer : 'Gwendolyn Williamson',
    address : 'jordan',
  };
  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
    
  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it('pick up event handler', async ()=> {
    events.emit('pickup',obj);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('intransit event handler', async ()=> {
    events.emit('in-transit',obj);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('delivered event handler', async ()=> {
    events.emit('delivered',obj);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
    
});