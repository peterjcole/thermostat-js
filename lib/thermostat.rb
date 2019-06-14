require 'data_mapper'

class Thermostat
  include DataMapper::Resource

  property :id,            Serial
  property :temp,          Integer
  property :power_save,    Boolean
  property :city,          String
end

