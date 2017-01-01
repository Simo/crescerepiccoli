class Event < ActiveRecord::Base

  scope :next_events, -> { where("quando >= ? ", DateTime.now.strftime('%Q') )}

  geocoded_by :address

  after_validation :geocode, :if => :address_changed?

end
