class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.integer :score, default: 0
      t.integer :week_score, default: 0

      t.timestamps
    end
  end
end
