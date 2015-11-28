class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :label
      t.string :reference
      t.string :color
      t.string :href

      t.timestamps null: false
    end
  end
end
