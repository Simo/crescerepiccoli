class MenuItem < ActiveRecord::Base

  def to_partial_path
    'application/menu_item'
  end

end
