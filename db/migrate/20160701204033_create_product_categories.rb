class CreateProductCategories < ActiveRecord::Migration
  def change
    create_table :product_categories do |t|

      t.string :name, null: false
      t.index :name
      t.timestamps null: false

    end
  end
end
