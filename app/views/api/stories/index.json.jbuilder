@stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :title, :body, :author_id, :comments_count, :likes_count, :created_at, :read_time
    json.author story.author.username
  end
end
