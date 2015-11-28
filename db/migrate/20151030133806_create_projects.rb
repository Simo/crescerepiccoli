class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.date :started_at
      t.date :finished_at
      t.string :author
      t.text :notes

      t.timestamps null: false
    end
  end
end
