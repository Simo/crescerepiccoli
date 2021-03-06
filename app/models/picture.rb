class Picture < ActiveRecord::Base

  belongs_to :uploadable, polymorphic: true
  mount_uploader :image, ImageUploader

  before_create :default_name

  def default_name
    self.name ||= File.basename(image.filename, '.*').titleize if image
  end

end
