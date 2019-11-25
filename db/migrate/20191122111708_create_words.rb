class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.integer :rank, default: 0
      t.string :pos, null: false
      t.string :en, null: true
      t.string :pt, null: true
      t.string :es, null: true
      t.boolean :status, default: true
      t.integer :level, default: 0

      t.timestamps
    end
  end
end
