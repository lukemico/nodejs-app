const routes = require('../src/js/routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['patienthome']).toBeDefined();
    expect(routes['carerinfo']).toBeDefined();
    expect(routes['emergencycontact']).toBeDefined();
  });

});
