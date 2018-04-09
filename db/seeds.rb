# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.create({username: 'yves', password: 'password', email: 'yves@smith.com'})
Story.create({
  title: 'The 3 little Pigs',
  body: 'This is a story about the big bad wolf, actually',
  author_id: 1,
  read_time: 17
  })
