class AddActiveToMenuItem < ActiveRecord::Migration
  def change
    add_column :menu_items, :active, :date
  end
end
