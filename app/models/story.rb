class Story < ApplicationRecord
  validates :title, :body, :author_id, :likes_count, :comments_count, presence: true

  before_validation :calc_read_time

  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_many :user_likes,
    through: :likes,
    source: :user

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  def calc_read_time
    if self.read_time == nil
      read_time = 0
      num_words = self.body.split.count
      while num_words >= 0
        read_time += 1
        num_words -= 275
      end
      self.read_time = read_time
    end
  end
end
