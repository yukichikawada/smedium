@stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :title, :body, :author_id, :comments_count, :likes_count
  end
end
