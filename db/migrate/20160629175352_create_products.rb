class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|

      t.string :name, null: false
      t.string :SKU, null: false
      t.float :price, null: false, default: 0.00
      t.integer :stock, null: false, default: 0
      t.index :name
    

      t.timestamps null: false
    end
  end
end
