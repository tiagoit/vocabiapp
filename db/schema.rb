# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_24_104858) do

  create_table "answers", force: :cascade do |t|
    t.string "source", null: false
    t.string "target", null: false
    t.boolean "correct", null: false
    t.integer "word_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_answers_on_user_id"
    t.index ["word_id"], name: "index_answers_on_word_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.decimal "score"
    t.decimal "week_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "source"
    t.string "target"
  end

  create_table "words", force: :cascade do |t|
    t.decimal "rank", default: "0.0"
    t.string "pos", null: false
    t.string "en"
    t.string "pt"
    t.string "es"
    t.boolean "status", default: true
    t.decimal "level", default: "0.0"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "answers", "users"
  add_foreign_key "answers", "words"
end
