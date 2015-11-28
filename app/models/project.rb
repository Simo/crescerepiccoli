class Project < ActiveRecord::Base

  has_many :tasks, :dependent => :destroy
  accepts_nested_attributes_for :tasks, allow_destroy: true

  def all_pictures
    pictures = []
    tasks.each do |task|
      task.pictures.each do |picture|
        pictures << picture
      end
    end
    pictures
  end

end
