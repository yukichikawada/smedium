json.extract! @story, :id, :title, :body, :author_id, :likes_count, :comments_count, :created_at, :read_time, :image_url, :user_likes
json.author @story.author.username

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :story_id, :created_at
      json.author comment.author.username
    end
  end
end
