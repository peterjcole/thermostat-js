require 'sinatra/base'
require 'sinatra/flash'
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

  post '/temperature' do
    Thermostat.first.update(temperature: params[:temperature])
  end

  run! if app_file == $0
  

end