class AddColumnToProduct < ActiveRecord::Migration
  def change
    add_column :products, :image_id, :integer
    add_index :products, :image_id
  end
end
