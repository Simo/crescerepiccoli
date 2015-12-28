class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :titolo
      t.string :descrizione
      t.date :quando
      t.time :ora
      t.string :address
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
