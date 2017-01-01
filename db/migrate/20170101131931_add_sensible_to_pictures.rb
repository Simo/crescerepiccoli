class AddSensibleToPictures < ActiveRecord::Migration
  def change
    add_column :pictures, :sensible, :boolean, :default => false
  end
end
