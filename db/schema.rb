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

ActiveRecord::Schema.define(version: 20170101131931) do

  create_table "breadcrumbs", force: :cascade do |t|
    t.string   "title"
    t.integer  "menu_item_id"
    t.string   "visible"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "titolo"
    t.string   "descrizione"
    t.date     "quando"
    t.time     "ora"
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "menu_items", force: :cascade do |t|
    t.string   "label"
    t.string   "reference"
    t.string   "color"
    t.string   "href"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date     "active"
    t.integer  "priority"
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "image"
    t.integer  "uploadable_id"
    t.string   "uploadable_type"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "sensible",        default: false
  end

  add_index "pictures", ["uploadable_id", "uploadable_type"], name: "index_pictures_on_uploadable_id_and_uploadable_type"

  create_table "posts", force: :cascade do |t|
    t.string   "autore"
    t.string   "titolo"
    t.string   "estratto"
    t.text     "corpo"
    t.text     "esteso"
    t.datetime "bozza"
    t.datetime "pubblicato"
    t.datetime "cancellato"
    t.string   "categoria"
    t.string   "tipo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.date     "started_at"
    t.date     "finished_at"
    t.string   "author"
    t.text     "notes"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "priority"
    t.date     "active"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer  "project_id"
    t.string   "title"
    t.text     "description"
    t.date     "started_at"
    t.date     "finished_at"
    t.text     "notes"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
