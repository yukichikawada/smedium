# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
yves = User.create({username: 'Yves', password: 'password', email: 'yves@smith.com'})
lambert = User.create({username: 'Lambert', password: 'password', email: 'lambert@stretcher.com'})
david = User.create({username: 'David', password: 'password', email: 'david@pasztor.com'})
chelsea = User.create({username: 'Chelsea', password: 'password', email: 'chelseag@summers.com'})
charlotte = User.create({username: 'Charlotte', password: 'password', email: 'charlotte@shane.com'})
larissa = User.create({username: 'Larissa', password: 'password', email: 'larissa@pham.com'})
ben = User.create({username: 'Ben', password: 'password', email: 'ben@thompson.com'})

Story.create({
  title: 'NC: Monopoly At The Breaking Point',
  body: 'This is a story about the big bad wolf, actually',
  author_id: yves.id,
  read_time: 17
  })
Story.create({
  title: '2:00PM Water Cooler 4/6/2018',
  body: 'This is a story about the big bad wolf, as well. Funny his popularity',
  author_id: lambert.id,
  read_time: 23
  })
Story.create({
  title: 'We Aint Got No History',
  body: 'The best blog about CFC. KTBFFH!!!!',
  author_id: david.id,
  read_time: 4
  })
Story.create({
  title: "What it's like to Grow Up",
  body: 'Awesome rhythm and perfect flow. Someone pay her to write more',
  author_id: chelsea.id,
  read_time: 9
  })
Story.create({
  title: 'More tinyletters: a true love story',
  body: 'Another writer who delicately warms the soul',
  author_id: larissa.id,
  read_time: 17
  })
Story.create({
  title: 'Stratechery and Other Small Victories',
  body: 'Subscription as a service, give him more subscribers',
  author_id: ben.id,
  read_time: 17
  })
