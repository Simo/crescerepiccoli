class AddPriorityToMenuItem < ActiveRecord::Migration
  def change
    add_column :menu_items, :priority, :integer
  end
end
