class CreateCategoryListings < ActiveRecord::Migration
  def change
    create_table :category_listings do |t|
      t.integer :productId, null: false
      t.integer :categoryId, null: false

      t.index :productId
      t.index :categoryId

      t.timestamps null: false
    end
  end
end
