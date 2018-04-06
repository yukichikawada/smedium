class Story < ApplicationRecord
  validates :title, :body, :author_id, :likes_count, :comments_count, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'
  # has_many :likes, :comments, dependent: :destroy
end
