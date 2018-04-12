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

story1 = Story.create({
  title: 'NC: Monopoly At The Breaking Point',
  body: 'This is a story about the big bad wolf, actually. Sometimes confused with the pigs that go to market. None of these little pigs made it home.',
  author_id: yves.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469586/u36kzlcfsoe0qdorolrn.jpg',
  read_time: 17
})
story2 = Story.create({
  title: 'We Aint Got No History',
  body: 'The best blog about CFC. KTBFFH!!!!',
  author_id: david.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523468747/ftrtdcbnylu1w8wrj1fi.jpg',
  read_time: 4
})
story3 = Story.create({
  title: '2:00PM Water Cooler 4/6/2018',
  body: 'This is a story about the big bad wolf, as well. Funny his popularity',
  author_id: lambert.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469657/l0pzpghxbnwevti1vi9z.jpg',
  read_time: 23
})
story4 = Story.create({
  title: "What it's like to Grow Up",
  body: 'Awesome rhythm and perfect flow. Someone pay her to write more',
  author_id: chelsea.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523464310/sample.jpg',
  read_time: 9
})
story5 = Story.create({
  title: 'More tinyletters: A Love Story',
  body: 'Another writer who delicately warms the soul',
  author_id: larissa.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469282/wjc0aqrn64pju4zrlvlo.jpg',
  read_time: 17
})

story6 = Story.create({
  title: 'Stratechery and Other Small Victories',
  body: 'Subscription as a service, give him more subscribers',
  author_id: ben.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469500/ndmi8mztwr1vocow0fgk.jpg',
  read_time: 17
})

Comment.create({
  body: 'Aggragation theory is...',
  author_id: ben.id,
  story_id: story1.id
})
#
Comment.create({
  body: 'I even impress myself at times by the quantity and quality of output',
  author_id: yves.id,
  story_id: story1.id
})

Comment.create({
  body: 'A letter to the editor does not an article make.',
  author_id: chelsea.id,
  story_id: story2.id
})

Comment.create({
  body: 'How do I even read as much as I do while writing?',
  author_id: yves.id,
  story_id: story2.id
})

Comment.create({
  body: 'I will never tell you about my field of expertise',
  author_id: yves.id,
  story_id: story3.id
})

Comment.create({
  body: 'I linked a GQ article about Cardi B the other day and surprised a lot of folks',
  author_id: lambert.id,
  story_id: story3.id
})

Comment.create({
  body: 'Did not introduce me to Frank Ohara but does like him',
  author_id: larissa.id,
  story_id: story4.id
})

Comment.create({
  body: 'One maca two maca three macarena',
  author_id: david.id,
  story_id: story4.id
})

Comment.create({
  body: 'Anarchist cat owner',
  author_id: charlotte.id,
  story_id: story5.id
})

Comment.create({
  body: 'next time ur in ny ill tell u where to go',
  author_id: larissa.id,
  story_id: story6.id
})
