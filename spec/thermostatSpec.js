describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Thermostat set at 20 degrees", function(){
    expect(thermostat._temperature).toEqual(20)
  });

  it("Increase temperature", function(){
    thermostat.increase(5)
    expect(thermostat._temperature).toEqual(25)
  });

  it("Increase temperature", function(){
    thermostat.decrease(5)
    expect(thermostat._temperature).toEqual(15)
  });

});