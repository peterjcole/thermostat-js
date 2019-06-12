function Thermostat() {
  this._temperature = 20;
  this._powerSave = true
}

Thermostat.prototype.increase = function(up) {
  (this._temperature + up <= 25) ? this._temperature += up : this._temperature = 25
}

Thermostat.prototype.decrease = function(down) {
  (this._temperature - down >= 10) ? this._temperature -= down : this._temperature = 10
}

Thermostat.prototype.powerSave = function() {
  return this._powerSave
}