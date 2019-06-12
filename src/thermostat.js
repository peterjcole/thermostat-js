function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.increase = function(up) {
  this._temperature += up;
}

Thermostat.prototype.decrease = function(down) {
  this._temperature -= down;
}
