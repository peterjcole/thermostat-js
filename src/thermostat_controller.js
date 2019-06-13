

$(document).ready(function() {
  
  var thermostat = new Thermostat()

  updateScreen()

  $('#tempUp').click(function() {
    thermostat.increase(1)
    updateScreen()
  })

  $('#tempDown').click(function() {
    thermostat.decrease(1)
    updateScreen()

  })

  $('#reset').click(function() {
    thermostat.reset()
    updateScreen()

  })

  $('#togglePowerSave').click(function() {
    thermostat.togglePowerSave()
    updateScreen()

  })

  function updateScreen() {
    temperatureUpdate()
    powerSaveUpdate()
    energyUsageUpdate()
  }

  function temperatureUpdate() {
    $('#tempDisplay').text(thermostat.temperature)
  }

  function powerSaveUpdate() {
    $('#powerSaveDisplay').text(thermostat.powerSave())
  }

  function energyUsageUpdate() {
    $('#energyUsageDisplay').text(thermostat.energyUsage())
  }


})

