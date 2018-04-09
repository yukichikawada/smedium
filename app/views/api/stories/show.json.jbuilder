json.extract! @story, :id, :title, :body, :author_id, :likes_count, :comments_count, :created_at, :read_time
json.author @story.author.username
