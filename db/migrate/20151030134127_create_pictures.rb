class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :name
      t.string :description
      t.string :image
      t.belongs_to :uploadable, polymorphic: true

      t.timestamps null: false
    end
    add_index :pictures, [:uploadable_id,:uploadable_type]
  end
end
