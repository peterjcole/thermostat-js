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

  it("won't let the user decrease beyond 10 degrees", function() {
    thermostat.decrease(10)
    thermostat.decrease(1)
    expect(thermostat._temperature).toEqual(10)
  })

  it("won't let the user increase beyond 25 degrees by default", function() {
    thermostat.increase(5)
    thermostat.increase(1)
    expect(thermostat._temperature).toEqual(25)
  })

  it("is in powersave mode by default", function() {
    expect(thermostat.powerSave()).toEqual(true)
  })

  xit("has a max temperature of 32 degrees when power save mode is off", function() {
    thermostat.togglePowerSave()
    thermostat.increase()
  })

});