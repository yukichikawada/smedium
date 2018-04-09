class RemoveUniquenessOnAuthorId < ActiveRecord::Migration[5.1]
  def change
    remove_index :stories, :author_id
    add_index :stories, :author_id
  end
end
