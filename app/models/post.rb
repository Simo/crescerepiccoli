class Post < ActiveRecord::Base

  scope :by_type, -> (tipo) { where tipo: tipo}
  scope :most_recent, -> (limit) { order("pubblicato desc").limit(limit) }

end
