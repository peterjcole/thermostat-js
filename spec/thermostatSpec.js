describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Thermostat set at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it("Increase temperature", function(){
    thermostat.increase(5)
    expect(thermostat.temperature).toEqual(25)
  });

  it("Increase temperature", function(){
    thermostat.decrease(5)
    expect(thermostat.temperature).toEqual(15)
  });

  it("won't let the user decrease beyond 10 degrees", function() {
    thermostat.decrease(11)
    expect(thermostat.temperature).toEqual(thermostat._minimum)
  });

  it("won't let the user increase beyond 25 degrees by default", function() {
    thermostat.increase(6)
    expect(thermostat.temperature).toEqual(thermostat._maximum)
  });

  it("is in powersave mode by default", function() {
    expect(thermostat.powerSave()).toEqual(true)
  });

  it("has a max temperature of 32 degrees when power save mode is off", function() {
    thermostat.togglePowerSave()
    thermostat.increase(13)
    expect(thermostat.temperature).toEqual(thermostat._maximum)
  });

  it("Reset temperature to 20", function() {
    thermostat.increase(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  });

  it("Turn Power Save off, then on again", function() {
    thermostat.togglePowerSave()
    thermostat.togglePowerSave()
    expect(thermostat.powerSave()).toEqual(true)
  })

  it("Testing togglePowerSave with maximum", function() {
    thermostat.togglePowerSave()
    thermostat.togglePowerSave()
    thermostat.increase(6)
    expect(thermostat.temperature).toEqual(thermostat._maximum)
  });

  it("Will return low-usage when below 18", function() {
    thermostat.decrease(4)
    expect(thermostat.energyUsage()).toEqual("low-usage")
  });

  it("Will return medium-usage when below 25", function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  });

  it("Will return high-usage when 25 or above", function() {
    thermostat.increase(5)
    expect(thermostat.energyUsage()).toEqual("high-usage")
  });

});
