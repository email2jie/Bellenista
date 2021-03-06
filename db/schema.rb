# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160708220022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer  "cart_id",                null: false
    t.integer  "product_id",             null: false
    t.integer  "quantity",   default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "cart_items", ["cart_id", "product_id"], name: "index_cart_items_on_cart_id_and_product_id", unique: true, using: :btree

  create_table "carts", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "carts", ["user_id"], name: "index_carts_on_user_id", using: :btree

  create_table "category_listings", force: :cascade do |t|
    t.integer  "productId",  null: false
    t.integer  "categoryId", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "category_listings", ["categoryId"], name: "index_category_listings_on_categoryId", using: :btree
  add_index "category_listings", ["productId"], name: "index_category_listings_on_productId", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "description"
    t.string   "url",            null: false
    t.string   "thumb_url",      null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "resource_type",  null: false
    t.string   "upload_type",    null: false
    t.string   "path",           null: false
    t.string   "height",         null: false
    t.string   "width",          null: false
    t.integer  "imageable_id"
    t.string   "imageable_type"
  end

  add_index "images", ["imageable_type", "imageable_id"], name: "index_images_on_imageable_type_and_imageable_id", using: :btree
  add_index "images", ["name"], name: "index_images_on_name", unique: true, using: :btree

  create_table "product_categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "product_categories", ["name"], name: "index_product_categories_on_name", using: :btree

  create_table "products", force: :cascade do |t|
    t.string   "name",                      null: false
    t.string   "SKU",                       null: false
    t.float    "price",       default: 0.0, null: false
    t.integer  "stock",       default: 0,   null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "description"
    t.integer  "image_id"
  end

  add_index "products", ["image_id"], name: "index_products_on_image_id", using: :btree
  add_index "products", ["name"], name: "index_products_on_name", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "product_id", null: false
    t.text     "review",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["product_id"], name: "index_reviews_on_product_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
