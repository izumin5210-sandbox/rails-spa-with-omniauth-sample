class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :login_name, limit: 39, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :users, :login_name, unique: true
  end
end
