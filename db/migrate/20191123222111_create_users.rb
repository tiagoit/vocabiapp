class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.numeric :score
      t.numeric :week_score

      t.timestamps
    end
  end
end
