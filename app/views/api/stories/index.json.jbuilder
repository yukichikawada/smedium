@stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :title, :body, :author_id, :comments_count, :likes_count, :created_at, :read_time, :image_url
    json.author story.author.username
  end
end
