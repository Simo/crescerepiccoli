class ChangeDataFormatInPosts < ActiveRecord::Migration

  def up
    change_column :posts, :bozza, :datetime
    change_column :posts, :pubblicato, :datetime
    change_column :posts, :cancellato, :datetime
  end

  def down
    change_column :posts, :bozza, :date
    change_column :posts, :pubblicato, :date
    change_column :posts, :cancellato, :date
  end

end
