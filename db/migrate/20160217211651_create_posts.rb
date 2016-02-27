class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :autore
      t.string :titolo
      t.string :estratto
      t.text :corpo
      t.text :esteso
      t.date :bozza
      t.date :pubblicato
      t.date :cancellato
      t.string :categoria
      t.string :tipo

      t.timestamps null: false
    end
  end
end
