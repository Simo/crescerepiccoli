class Post < ActiveRecord::Base

  extend FriendlyId
  friendly_id :titolo, use: [:slugged, :finders]

  scope :by_type, -> (tipo) { where tipo: tipo}
  scope :most_recent, -> (limit) { order("pubblicato desc").limit(limit) }

end
