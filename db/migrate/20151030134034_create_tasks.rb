class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.string :title
      t.text :description
      t.date :started_at
      t.date :finished_at
      t.text :notes

      t.timestamps null: false
    end
  end
end
