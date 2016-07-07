class AddColumnToImage < ActiveRecord::Migration
  def change
    add_column :images, :resource_type, :string
    add_column :images, :type, :string
    add_column :images, :path, :string
    add_column :images, :height, :integer
    add_column :images, :width, :integer
  end
end
