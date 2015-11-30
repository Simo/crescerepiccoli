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

ActiveRecord::Schema.define(version: 20151114070940) do

  create_table "menu_items", force: :cascade do |t|
    t.string   "label"
    t.string   "reference"
    t.string   "color"
    t.string   "href"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "image"
    t.integer  "uploadable_id"
    t.string   "uploadable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pictures", ["uploadable_id", "uploadable_type"], name: "index_pictures_on_uploadable_id_and_uploadable_type"

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.date     "started_at"
    t.date     "finished_at"
    t.string   "author"
    t.text     "notes"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
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

end