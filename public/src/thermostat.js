function Thermostat() {
  this.temperature = 20;
  this._powerSave = true;
  this._minimum = 10;
  this._maximum = 25;
}

Thermostat.prototype.increase = function(up) {
  (this.temperature + up <= this._maximum) ? this.temperature += up : this.temperature = this._maximum;
}

Thermostat.prototype.decrease = function(down) {
  (this.temperature - down >= this._minimum) ? this.temperature -= down : this.temperature = this._minimum;
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
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}

Thermostat.prototype.update = function(temperature, powerSave) {
  this.temperature = temperature
  this._powerSave = powerSave
}
