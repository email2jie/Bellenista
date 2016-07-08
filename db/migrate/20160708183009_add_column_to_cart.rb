class AddColumnToCart < ActiveRecord::Migration
  def change
    add_column :carts, :item_count, :integer
    add_column :carts, :price_sum, :float
    change_column :products, :price, :float
  end
end
