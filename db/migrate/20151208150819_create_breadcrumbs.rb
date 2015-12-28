class CreateBreadcrumbs < ActiveRecord::Migration
  def change
    create_table :breadcrumbs do |t|
      t.string :title
      t.integer :menu_item_id
      t.string :visible

      t.timestamps null: false
    end
  end
end
