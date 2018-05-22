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
  title: 'NC: Best family blog',
  body: 'This is a story about the big bad wolf, actually. Sometimes confused with the pigs that go to market. None of these little pigs made it home.',
  author_id: yves.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469586/u36kzlcfsoe0qdorolrn.jpg',
  read_time: 17
})
story2 = Story.create({
  title: 'We Aint Got No History',
  body: 'THE blog about CFC. KTBFFH!!!!',
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
  body: 'Awesome rhythm and perfect flow. Someone pay her to write more, please.',
  author_id: chelsea.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523464310/sample.jpg',
  read_time: 9
})
story5 = Story.create({
  title: 'Tinyletters: A Love Story',
  body: 'What would I do without these wonderful things appearing in my inbox?',
  author_id: larissa.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469282/wjc0aqrn64pju4zrlvlo.jpg',
  read_time: 17
})

story6 = Story.create({
  title: 'Stratechery and Other Small Victories',
  body: 'Subscription as a service, give him more subscribers',
  author_id: ben.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523469500/ndmi8mztwr1vocow0fgk.jpg',
  read_time: 3
})

story7 = Story.create({
  title: 'Prizefighter: A nice beginning',
  body: 'A friendly bar in Emeryville. Ill never forget how nice they were to me :)',
  author_id: chelsea.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523651170/qjqrlhkxurk98t8n0jpv.jpg',
  read_time: 9
})

story8 = Story.create({
  title: "Eli's Mile High Club",
  body: 'A place that has gone thru a transformation. Unfortunately people are getting territorial about it.',
  author_id: larissa.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523489754/ifu43dsrhkfdmncvoaem.jpg',
  read_time: 5
})

story9 = Story.create({
  title: "Arizmendi Pizza FTW",
  body: 'Do you love pizza? How many times can you say you love pizza? A pizza showdown.',
  author_id: david.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523489833/ntulijycq1uqpsxipzcm.jpg',
  read_time: 24
})

story10 = Story.create({
  title: "Red Cotton Demin",
  body: 'Camilo Love is a nice guy who makes cool jeans. Hopefully he kills it.',
  author_id: lambert.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523488623/u2qemnvwfypv7upf3um0.png',
  read_time: 11
})

story11 = Story.create({
  title: "The Real McCoy: Bucco J-22",
  body: 'Have you ever dreamed about a jacket so hard it magically was made?',
  author_id: yves.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1526959794/e0nkqwhii3pdwf7oowaa.jpg',
  read_time: 6
})

story12 = Story.create({
  title: "SF City FC - only team in the City",
  body: 'Are they gonna make a solid run in the Open this year?',
  author_id: lambert.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523479126/kg0vmxey8tdxfo0zihgt.png',
  read_time: 20
})

story13 = Story.create({
  title: "Do you bbq?",
  body: 'What are your thoughts on brining? You see, I insist on ribs going in a brine. Nothing crazy like 24 hours but definitely a few.',
  author_id: lambert.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523485269/k4gxf8uviyk7hjkcu3zo.png',
  read_time: 185
})

story14 = Story.create({
  title: "Yakiniku yaitemo ie yakuna!",
  body: 'Such a funny commercial. I think it was an ad for a yakiniku sauce that aired over 10 years ago at this point',
  author_id: chelsea.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523643704/jnijrvq7x8cajupngioy.jpg',
  read_time: 3
})

story15 = Story.create({
  title: "Can I pay you in gum?",
  body: 'Another funny commercial. Where did all the good commercials go? That one year nearly all the commercials for the Superb Bowl were tear jerkers.',
  author_id: larissa.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523472583/g6wrdldapfsqw0des1ct.jpg',
  read_time: 5
})

story16 = Story.create({
  title: "My sisters birthday!",
  body: 'Today she turns 24. Hopefully she is learning how to have a good time. She stresses out too much.',
  author_id: ben.id,
  image_url: 'https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523481414/f6y7rufxhgvyg40zee6a.jpg',
  read_time: 24
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
