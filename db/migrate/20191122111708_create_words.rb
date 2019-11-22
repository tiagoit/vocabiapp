class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :en, null: false
      t.string :pt, null: true
      t.string :es, null: true
      t.string :pos, null: false

      t.timestamps default: -> { 'CURRENT_TIMESTAMP' }
    end
  end
end
