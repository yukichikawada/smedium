class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :image_url
      t.integer :author_id, null: false
      t.integer :comments_count, null: false
      t.integer :likes_count, null: false
      t.timestamps
    end

    add_index :stories, :author_id, unique: true
    add_index :stories, :comments_count
    add_index :stories, :likes_count
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
