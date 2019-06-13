


$(document).ready(function() {

  var thermostat = new Thermostat()
  var weather

  function getWeather() {
    $.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=aa0529eec1c902a5887400de5ef21c48', function(r){
      weather = r
      weatherUpdate(weather)
    })
  }

  getWeather()
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

  function weatherUpdate(weather) {
    $('#outsideTemp').text(Math.round(weather.main.temp - 273.15))
    $('#weatherWord').text(weather.weather[0].description)
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
