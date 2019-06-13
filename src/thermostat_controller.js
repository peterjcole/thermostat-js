
$(document).ready(function() {

  var thermostat = new Thermostat()
  var weather

  function getWeather(location) {
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.weather_key}`, function(r){
      weather = r
      weatherUpdate(weather)
    })
  }

  updateScreen()

  $('#weatherInput').focus(function() {
    $( this ).val('')
  })

  $('#weatherSubmit').click(function() {
    getWeather($('#weatherInput').val())
  })

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
    $('#weatherImage').attr('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
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
