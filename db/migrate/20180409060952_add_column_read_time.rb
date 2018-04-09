class AddColumnReadTime < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :read_time, :integer
  end
end
