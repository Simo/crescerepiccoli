class Event < ActiveRecord::Base

  scope :next_events, -> { where("quando >= ? ", DateTime.now.to_date )}

  geocoded_by :address

  after_validation :geocode, :if => :address_changed?

end
