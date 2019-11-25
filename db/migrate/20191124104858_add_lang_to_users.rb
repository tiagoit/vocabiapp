class AddLangToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :source, :string
    add_column :users, :target, :string
  end
end
