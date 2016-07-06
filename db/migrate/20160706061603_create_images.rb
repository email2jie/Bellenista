class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name, null: false
      t.string :description
      t.string :url, null: false
      t.string :thumb_url, null: false

      t.index :name, unique: true
      t.timestamps null: false
    end
  end
end
