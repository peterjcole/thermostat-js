function Thermostat() {
  this._temperature = 20;
  this._powerSave = true;
  this._minimum = 10;
  this._maximum = 25;
}

Thermostat.prototype.increase = function(up) {
  (this._temperature + up <= this._maximum) ? this._temperature += up : this._temperature = this._maximum;
}

Thermostat.prototype.decrease = function(down) {
  (this._temperature - down >= this._minimum) ? this._temperature -= down : this._temperature = this._minimum;
}

Thermostat.prototype.powerSave = function() {
  return this._powerSave;
}

Thermostat.prototype.togglePowerSave = function() {
  if (this._powerSave == true) {
    this._powerSave = false;
    this._maximum = 32;
  } else {
    this._powerSave = true;
    this._maximum = 25;
  }
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}
