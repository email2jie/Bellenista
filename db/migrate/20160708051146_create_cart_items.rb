class CreateCartItems < ActiveRecord::Migration
  def change
    create_table :cart_items do |t|
      t.integer :cart_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, default: 1

      t.index [:cart_id, :product_id], unique: true

      t.timestamps null: false
    end
  end
end
