require 'sinatra/base'
require 'sinatra/flash'
require 'sinatra/json'

require 'data_mapper'
require 'active_support/core_ext/integer/inflections'
require_relative 'lib/thermostat'
require_relative 'data_mapper_setup'
require 'bcrypt'

class ThermostatApp < Sinatra::Base
  
  enable :sessions
  register Sinatra::Flash

  get '/' do
    erb(:index)
  end

  post '/thermostat' do
    Thermostat.first.update(city: params[:city])
    Thermostat.first.update(power_save: params[:power_save])
    Thermostat.first.update(temp: params[:temp])
  end

  get '/thermostat' do
    json(Thermostat.first)
  end

  run! if app_file == $0
  

end