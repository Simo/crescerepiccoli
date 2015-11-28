class Task < ActiveRecord::Base

  belongs_to :project
  has_many :pictures, as: :uploadable
  accepts_nested_attributes_for :pictures, allow_destroy: true

end
