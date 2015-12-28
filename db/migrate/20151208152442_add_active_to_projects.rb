class AddActiveToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :active, :date
  end
end
