class Project < ActiveRecord::Base

  has_many :tasks, :dependent => :destroy
  accepts_nested_attributes_for :tasks, allow_destroy: true

  # Rende la lista di tutte le attività in ordine cronologico collegate al progetto
  def ordered_tasks
    tasks.sort_by &:started_at
  end

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
