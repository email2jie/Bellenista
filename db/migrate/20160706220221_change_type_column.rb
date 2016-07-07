class ChangeTypeColumn < ActiveRecord::Migration
  def change
    rename_column :images, :type, :upload_type
  end
end
