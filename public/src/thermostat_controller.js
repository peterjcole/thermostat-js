
$(document).ready(function() {

  var thermostat = new Thermostat()
  var weather
  getThermostat()



  function getWeather(location) {
    $.ajax({
      type: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.weather_key}`,
      statusCode: {
        404: function(responseObject, textStatus, jqXHR) {
          alert('Location not found')
        },
      }
    })
    .done(function(r){
        weather = r
        console.log(r)
        weatherUpdate(weather)
    })
  }

  function getThermostat() {
    $.ajax({
      type: 'GET',
      url: `/thermostat`
    })
    .done(function(result){
      console.log(result)
      updateLocalThermostatAndWeather(result)
      updateScreen()
      updateWeather()
    })
  }


  function updateLocalThermostatAndWeather(result) {
    thermostat.update(result.temp, result.power_save)
    $('#weatherInput').val(result.city)
  }

  function updateRemoteThermostatAndWeather() {
    $.ajax({
      type: 'POST',
      url: '/thermostat',
      data: { 'temp': thermostat.temperature, 'power_save': thermostat.powerSave(), 'city': $('#weatherInput').val() }
    })
  }

  function updateWeather() {
    getWeather($('#weatherInput').val())
  }

  $('#weatherInput').focus(function() {
    $( this ).val('')
  })

  $('#weatherSubmit').click(function() {
    updateWeather()
    updateRemoteThermostatAndWeather()    
  })

  $('#tempUp').click(function() {
    thermostat.increase(1)
    updateScreen()
    updateRemoteThermostatAndWeather()
  })

  $('#tempDown').click(function() {
    thermostat.decrease(1)
    updateScreen()
    updateRemoteThermostatAndWeather()
  })

  $('#reset').click(function() {
    thermostat.reset()
    updateScreen()
    updateRemoteThermostatAndWeather()
  })

  $('#togglePowerSave').click(function() {
    thermostat.togglePowerSave()
    updateScreen()
    updateRemoteThermostatAndWeather()
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
