json.extract! @story, :id, :title, :body, :author_id, :likes_count, :comments_count, :created_at, :read_time
json.author @story.author.username

json.comments @comments do |comment|
  json.extract! comment, :id, :body, :author_id, :story_id, :created_at
  json.author comment.author.username
end
