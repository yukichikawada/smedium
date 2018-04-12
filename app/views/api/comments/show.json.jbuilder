json.extract! @comment, :id, :body, :author_id, :story_id, :created_at
json.author @comment.author.username
