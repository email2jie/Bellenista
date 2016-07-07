class ChangeImageColumns < ActiveRecord::Migration
  def change
    change_column :images, :height, :string, null: false
    change_column :images, :width, :string, null: false
    change_column :images, :resource_type, :string, null: false
    change_column :images, :type, :string, null: false
    change_column :images, :path, :string, null: false
  end
end
