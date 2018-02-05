# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Car.destroy_all
User.destroy_all
Review.destroy_all

User.create( username: 'Akram', email: "aazzaiez@gmail.com", password: "guest123")
User.create( username: 'Dan', email: "Dand@gmail.com", password: "guest123")
User.create( username: 'Brian', email: "obriann@gmail.com", password: "guest123")
User.create( username: 'Miloud', email: "tmiloud@gmail.com", password: "guest123")
User.create( username: 'Brahim', email: "rbrahim@gmail.com", password: "guest123")
User.create( username: 'Marc', email: "kmarc@gmail.com", password: "guest123")
User.create( username: 'Antoine', email: "qantoine@gmail.com", password: "guest123")
User.create( username: 'guest', email: "guest", password: "guest123")


Car.create!(
  year: 2016,
  make: "Toyota",
  model: "Camry",
  description: "Competent and mostly inoffensive, the Toyota Camry was the go-to driving appliance for 429,355 buyers in 2015,
    making it once again the best-selling car in the United States. Despite its appliance-like lack of verve on the road—which contributed to the Camry finishing last in our latest comparison
    test of family sedans—this is a sensible machine with lots of space for people and cargo, decent manners, plenty of available technology, and an optional hybrid powertrain that makes it an
    upstanding four-wheeled citizen for the environmentally conscious.",
  mpg: 27,
  mpg_city: 22,
  mpg_highway: 33,
  acceleration: 7.8,
  top_speed: 128,
  price: 34000
)

Car.create!(
  year: 2016,
  make: "Toyota",
  model: "Corolla",
  description: "The feature-rich Corolla is an exceptional value, but the one feature it doesn’t offer is thrills. A 1.8-liter
    four-cylinder makes 132 hp—140 hp in the LE Eco model—and drives the front wheels through a six-speed manual or a CVT. A 6.1-inch
    touchscreen infotainment system with Bluetooth is standard but can be upgraded to a 7.0-inch unit with navigation. ",
  mpg: 29,
  mpg_city: 24,
  mpg_highway: 34,
  acceleration: 8.6,
  top_speed: 111,
  price: 19000
)

Car.create!(
  year: 2016,
  make: "Honda",
  model: "Accord",
  description: "Just when you thought the Accord couldn’t get any better, the all-new model raises the bar; its spot on our 2018 10Best
    Cars list makes it 21 consecutive years. The base engine is a 192-hp turbo inline-four with a CVT; the optional 252-hp turbo inline-four
    has a 10-speed automatic. Both engines are smooth, refined, and available with a six-speed manual. Handling is composed but ready to play
    when you are. Adaptive cruise control, forward-collision warning, and lane-keeping assist are standard.",
  mpg: 30,
  mpg_city: 22,
  mpg_highway: 31,
  acceleration: 7.5,
  top_speed: 132,
  price: 28000
)

Review.create(
  body: "My camry has been extremely reliable. Great MPG and low maintenance costs.",
  user_id: 1,
  car_id: 1,
  user_rating: 9
)

Review.create(
  body: "Toyota went above and beyond to deliver a quality product here. I owner the cat for a few months not and totally love it",
  user_id: 2,
  car_id: 1,
  user_rating: 10
)

Review.create(
  body: "This vehicle is extremely reliable and good on gas. Make sure to get the hybrid version for extra savings",
  user_id: 3,
  car_id: 1,
  user_rating: 9
)

Review.create(
  body: "The corolla is perfect for driving in a city. This car is a champ if you want to fit into small parking spots",
  user_id: 4,
  car_id: 2,
  user_rating: 10
)

Review.create(
  body: "You should not buy this car if you're looking for a quiet ride insulated from your environment. Very bad NVH.",
  user_id: 5,
  car_id: 2,
  user_rating: 2
)

Review.create(
  body: "This is my third corolla, and I am happy with the quality of the car. Maintaining this car is very cheap, which I really like",
  user_id: 6,
  car_id: 2,
  user_rating: 8
)

Review.create(
  body: "This is the last Honda I will ever own. This car is not realiable and have cost more what I paid for it in maintenance fees",
  user_id: 7,
  car_id: 3,
  user_rating: 1
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_01_kxwtai.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_05_dw6mya.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_04_sp4u9r.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_03_nat2jc.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_02_kws82v.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_01_uzshwe.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_02_thkvv6.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_03_vv6abf.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_04_ns5g6e.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_05_udgeyx.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_01_vtt3cq.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_02_d3u1zs.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_03_kv0rgo.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_04_yp84mx.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_05_bl4jjk.jpg"
)
