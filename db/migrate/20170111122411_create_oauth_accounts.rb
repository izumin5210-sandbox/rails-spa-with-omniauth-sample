class CreateOauthAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :oauth_accounts do |t|
      t.references :user, foreign_key: true, null: false
      t.string :uid, null: false
      t.string :provider, null: false
      t.string :name
      t.string :nickname
      t.string :email
      t.string :url
      t.string :image_url
      t.string :access_token
      t.string :access_secret
      t.text :raw_info
      t.text :credentials

      t.timestamps
    end
    add_index :oauth_accounts, [:uid, :provider], unique: true
  end
end
