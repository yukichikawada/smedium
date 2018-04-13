class Like < ApplicationRecord
  validates :user_id, :story_id, presence: true

  belongs_to :story
  belongs_to :user 
end
