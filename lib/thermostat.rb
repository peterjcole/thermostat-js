require 'data_mapper'

class Thermostat
  include DataMapper::Resource

  property :id,            Serial
  property :temp,          Integer
  property :energy_saving, Boolean
  property :city,          String
end
