class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.text :review, null: false
      t.index :user_id
      t.index :product_id
      t.timestamps null: false
    end
  end
end
