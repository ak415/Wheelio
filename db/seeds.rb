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


Car.create!(
  year: 2017,
  make: "BMW",
  model: "5-series",
  description: "Slotting above the compact 3 Series and below the full-size 7 Series, the 2017 BMW 5 Series is a midsize luxury car that will initially be available as a sedan. Additional variants on the way are likely to include a new Gran Turismo hatchback, 530e plug-in hybrid, and a more potent M550i. Rear-wheel drive is standard and all-wheel drive is available on the 530i and 540i. Active grille shutters in the grille improve the car’s aerodynamics and shorten the powertrain’s warm-up phase.",
  mpg: 30,
  mpg_city: 19,
  mpg_highway: 37,
  acceleration: 5.6,
  top_speed: 155,
  price: 51723
)


# ID 5
Car.create!(
  year: 2017,
  make: "BMW",
  model: "3-series",
  description: "At one time, the 3-series was the benchmark for all sports sedans, but its once uncompromised tactility has been slightly softened in this latest generation. The showroom is flooded with choices: The 3-series offers five different powertrain options (including a turbo-diesel and a plug-in hybrid), a six-speed manual or an eight-speed automatic transmission, and either rear- or all-wheel drive. The liftback Gran Turismo provides extra interior space, unique styling, and standard all-wheel drive.",
  mpg: 30,
  mpg_city: 23,
  mpg_highway: 34,
  acceleration: 5.6,
  top_speed: 155,
  price: 35895
)


# id6

Car.create!(
  year: 2017,
  make: "Tesla",
  model: "Model S",
  description: "Boasting up to 337 miles of range, the Model S is the all-electric dream car envied by many. Icing on the cake is Ludicrous mode, which blasts the top P100D to 60 mph in a claimed 2.5 seconds. The lower-spec models offer reduced driving ranges and features. Luxury items such as an air filter that Tesla says can protect occupants from bioweapons and pollutants—plus available high-tech features such as Tesla’s Autopilot—seal the deal.",
  mpg: 101,
  mpg_city: 107,
  mpg_highway: 101,
  acceleration: 2.8,
  top_speed: 155,
  price: 69200
)




# ID7
Car.create!(
  year: 2018,
  make: "Audi",
  model: "S5",
  description: "Quick, nimble, and subtly handsome: That summarizes the S5 regardless of body style. Both S5s combine Quattro all-wheel drive with precise steering, robust brakes, and sharp handling. The droptop boosts glamour, but the coupe offers increased practicality. Both versions use a 354-hp turbocharged 3.0-liter V-6 and an eight-speed automatic; they are also comprehensively equipped with automated emergency braking, modern infotainment systems, and an optional reconfigurable digital gauge cluster.",
  mpg: 24,
  mpg_city: 20,
  mpg_highway: 29,
  acceleration: 4.8,
  top_speed: 155,
  price: 54400
)








# ID8
Car.create!(
  year: 2018,
  make: "Audi",
  model: "Q5",
  description: "Comfortable, quiet, and handsomely styled, the Audi Q5 provides the premium look and feel that crossover buyers crave. Driving all four wheels is a 252-hp turbo 2.0-liter four-cylinder and a seven-speed automatic. The cabin is well-finished, and atop its dash sits a 7.0-inch infotainment screen with Apple CarPlay and Android Auto; an 8.3-inch display is optional, as is the 12.3-inch driver-facing digital gauge cluster. All Q5s come with automated emergency braking and a power liftgate.",
  mpg: 25,
  mpg_city: 23,
  mpg_highway: 27,
  acceleration: 5.8,
  top_speed: 128,
  price: 42475
)






# ID9

Car.create!(
  year: 2018,
  make: "Mercedes-Benz",
  model: "C-class",
  description: "With as many flavors as a fro-yo shop, the C-class offers luxury and performance in a tidy package. It’s available as a sedan, coupe, or cabriolet with standard rear- or optional all-wheel drive. A 241-hp turbo 2.0-liter inline-four and a nine-speed automatic are standard; a plug-in hybrid version of the sedan has 275 horsepower and is good for 51 MPGe combined, per the EPA. Bluetooth, a 7.0-inch display, and automated emergency braking are standard; Apple CarPlay and Android Auto are optional.",
  mpg: 30,
  mpg_city: 22,
  mpg_highway: 29,
  acceleration: 6.1,
  top_speed: 129,
  price: 41245
)



# ID10

Car.create!(
  year: 2017,
  make: "Lexus",
  model: "RX 350",
  description: "Comfort, quality and a carlike driving experience are key strengths of the 2017 Lexus RX 350. Although it falls short of its competitors in some ways, it's impeccably crafted and boldly styled. The RX is a smart pick if you're looking for a well-rounded luxury crossover. For 2017, the Lexus RX 350 includes some previously optional safety features as standard equipment. The F Sport trim is now available in front-wheel drive.",
  mpg: 23,
  mpg_city: 19,
  mpg_highway: 26,
  acceleration: 6.5,
  top_speed: 115,
  price: 44620
)



# ID11


Car.create!(
  year: 2018,
  make: "Toyota",
  model: "Prius",
  description: "With its combination of space and efficiency, the Prius is quite compelling—in our experience, 46 mpg is achievable, even at 75-mph speeds. In the fun-to-drive department, though, it falls short, and the brakes feel vague. The cabin is mostly quiet, but the tires clomp loudly over broken roads. The seats are comfortable; fold down the rear ones for 66 cu ft of cargo room. A responsive touchscreen controls the infotainment system. The Prius Eco model rates at 58 mpg city and 53 mpg highway.",
  mpg: 55,
  mpg_city: 58,
  mpg_highway: 53,
  acceleration: 10.5,
  top_speed: 114,
  price: 24370
)


# ID12

Car.create!(
  year: 2017,
  make: "Jeep",
  model: "Grand Cherokee",
  description: "Thanks to its famous off-road grit, the Grand Cherokee’s expertise doesn’t begin and end in the concrete jungle like many of its rivals. A 295-hp 3.6-liter V-6, eight-speed automatic, and rear-drive are standard; a 240-hp turbo-diesel V-6 and 360-hp 5.7-liter V-8 are optional, as are three four-wheel drive setups, each with varying capabilities. A tidy cabin with touchscreen infotainment and optional Wi-Fi make the Grand Cherokee a pleasant place to be whether fording rivers or running errands.",
  mpg: 22,
  mpg_city: 18,
  mpg_highway: 25,
  acceleration: 7.1,
  top_speed: 118,
  price: 31490
)


# ID13

Car.create!(
  year: 2017,
  make: "Cadillac",
  model: "Escalade",
  description: "With room for up to eight, a tow rating of up to 8300 pounds, and tons of bling, the Escalade is luxury writ large. A 420-hp V-8 and an eight-speed automatic with rear-drive are standard; all-wheel drive is optional. The long-wheelbase ESV adds about 25 cubic feet of cargo space behind the third row. The rough ride and reluctant handling betray the pickup-truck foundation, and extras can push the price into the stratosphere. A tribute to conspicuous consumption, it’s more than most drivers need.",
  mpg: 17,
  mpg_city: 15,
  mpg_highway: 21,
  acceleration: 5.8,
  top_speed: 112,
  price: 75990
)


# ID14
Car.create!(
  year: 2017,
  make: "BMW",
  model: "X5",
  description: "You’ve got your choice—hot rod, hybrid, or family cruiser. Along with multiple powertrains, the versatile X5 handles like BMW’s excellent sports sedans. Its styling, flexibility, and optional third row are also reasons we consider it tops among crossovers. A 300-hp turbocharged inline-six is standard; a 445-hp twin-turbo V-8 and a 255-hp turbo-diesel inline-six are optional. Unfortunately, the plug-in hybrid’s electric-only range is 14 miles, and in our test we recorded a disappointing 21 MPGe.",
  mpg: 21,
  mpg_city: 18,
  mpg_highway: 23,
  acceleration: 5.8,
  top_speed: 129,
  price: 58195
)


# ID15
Car.create!(
  year: 2018,
  make: "Land Rover",
  model: "Range Rover",
  description: "The Range Rover caters to every conceivable need by offering luxury and off-road prowess. The 340-hp supercharged V-6—with an eight-speed automatic and all-wheel drive—offers a decent compromise between power and efficiency. There is also a 380-hp version of the V-6 and a 254-hp turbodiesel V-6 with 443 lb-ft of torque. Standard and long wheelbase models are equally posh, especially in Autobiography trim. The Rover may be expensive and imposing, but few utes can match its panache.",
  mpg: 24,
  mpg_city: 22,
  mpg_highway: 29,
  acceleration: 7.3,
  top_speed: 144,
  price: 88345
)


# ID16

Car.create!(
  year: 2018,
  make: "Ford",
  model: "Mustang GT",
  description: "The galloping pony nestled in the grille serves as a reminder that the Mustang is most at home on the open road. Both the coupe and convertible come with your choice of a 310-hp turbo four or a 460-hp V-8; choose from a six-speed manual or a 10-speed automatic transmission. A manual-transmission-only, 475-hp Steve McQueen–inspired Bullitt special edition will join the lineup later in 2018. The rear-wheel-drive chassis is eager to attack corners while enabling a smooth ride when cruising.",
  mpg: 20,
  mpg_city: 15,
  mpg_highway: 25,
  acceleration: 4.3,
  top_speed: 155,
  price: 35095
)


Car.create!(
  year: 2018,
  make: "Volkswagen",
  model: "Golf GTI",
  description: "Give it up for the GTI: This iconic hot hatch balances fun and function as few can do, and continues to win a spot on our 10Best Cars list for 2018. The standard powertrain is a 220-hp turbo 2.0-liter inline-four with a six-speed manual. A six-speed automatic costs extra, but it’s almost as much fun as the manual. Sportier trims have upgraded brakes and a torque-sensing limited-slip differential. The GTI’s classic plaid seats come standard, as do agile handling and hatchback practicality.",
  mpg: 28,
  mpg_city: 24,
  mpg_highway: 34,
  acceleration: 5.9,
  top_speed: 126,
  price: 27265
)


# ID18
Car.create!(
  year: 2016,
  make: "Nissan",
  model: "Altima",
  description: "Curvy, dramatic styling mimics bigger brother Maxima and gives the Altima an upscale vibe. Engine choices are either a 182-hp 2.5-liter four or a 270-hp 3.5-liter V-6, both with a CVT. The SR infuses a little fun by adding stiffer suspension tuning, paddle shifters, and unique wheels. Forward emergency braking with adaptive cruise control creates a robust active-safety bundle. Overall, the Altima is a capable sedan with a decent options list and a roomy, comfortable cabin.",
  mpg: 33,
  mpg_city: 27,
  mpg_highway: 39,
  acceleration: 8.2,
  top_speed: 121,
  price: 24145
)

# ID19

Car.create!(
  year: 2018,
  make: "Volvo",
  model: "XC60",
  description: "A charming alternative to the Teutonic status quo, the XC60 delivers a supple ride, a smart cabin, and tons of safety tech. All models come with a 2.0-liter inline-four: turbo T5 models make 250 hp and the turbo-and-supercharged T6 makes 316 hp. The hybrid T8 makes 400 hp with the help of an electric motor, but don’t mistake it for a performance SUV. Leather seats, a sunroof, automated emergency braking, Apple CarPlay, and Android Auto are standard; a semi-autonomous driving mode is optional.",
  mpg: 24,
  mpg_city: 22,
  mpg_highway: 28,
  acceleration: 7.3,
  top_speed: 125,
  price: 42495
)



Car.create!(
  year: 2018,
  make: "Ford",
  model: "Raptor",
  description: "The F-150 Raptor is the high-flying, high-velocity version of the regular Ford F-150—both 10Best winners. Its 450-hp twin-turbo 3.5-liter V-6 and paddle-shifted 10-speed automatic can catapult it from zero to 60 mph in 5.1 seconds. The Raptor also has exclusive off-road equipment as standard, including all-wheel drive, gnarly tires, beefy dampers, and wider body panels. Available as SuperCab and SuperCrew models, the fantastic Ford perfectly combines fun and functional for a full-size pickup.",
  mpg: 16,
  mpg_city: 15,
  mpg_highway: 18,
  acceleration: 5,
  top_speed: 107,
  price: 51415
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
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-01_i0mehj.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-02_juw3kd.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-03_i41vzj.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-04_fy8vzm.jpg"
)

Image.create(
  car_id: 1,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-05_rgnxxb.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-01_lkxrql.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-02_b1lui2.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-03_r5gmca.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-04_yqbsbe.jpg"
)

Image.create(
  car_id: 2,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-05_hduh7g.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-03_makpcj.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-05_z3imrd.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-04_utf8pw.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-02_puqexp.jpg"
)

Image.create(
  car_id: 3,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-01_li72dq.jpg"
)



Image.create(
  car_id: 4,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518202146/2017-BMW-540i-1_uacguq.jpg"
)

Image.create(
  car_id: 4,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518202146/2017-BMW-540i-3_soeke3.jpg"
)

Image.create(
  car_id: 4,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518202146/2017-BMW-540i-4_n46qvr.jpg"
)

Image.create(
  car_id: 4,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518202146/2017-BMW-540i-5_kdshbb.jpg"
)

Image.create(
  car_id: 4,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518202146/2017-BMW-540i-2_ea8jvd.jpg"
)




Image.create(
  car_id: 5,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518203222/2017-BMW-330i-5_ukwdcg.jpg"
)

Image.create(
  car_id: 5,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518203222/2017-BMW-330i-4_cjmonf.jpg"
)

Image.create(
  car_id: 5,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518203222/2017-BMW-330i-3_h8000r.jpg"
)

Image.create(
  car_id: 5,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518203222/2017-BMW-330i-2_d0hiyt.jpg"
)

Image.create(
  car_id: 5,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518203222/2017-BMW-330i-1_fi3pee.jpg"
)




Image.create(
  car_id: 6,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204245/2017-Tesla-Model-S-P90D-5_wtwmfg.jpg"
)

Image.create(
  car_id: 6,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204245/2017-Tesla-Model-S-P90D-4_hpuk4y.jpg"
)

Image.create(
  car_id: 6,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204245/2017-Tesla-Model-S-P90D-3_yckzhl.jpg"
)

Image.create(
  car_id: 6,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204245/2017-Tesla-Model-S-P90D-2_vglf0p.jpg"
)

Image.create(
  car_id: 6,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204245/2017-Tesla-Model-S-P90D-1_ohy5fo.jpg"
)







Image.create(
  car_id: 7,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-101_lhdjqp.jpg"
)

Image.create(
  car_id: 7,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-102_c85hj3.jpg"
)

Image.create(
  car_id: 7,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-120_qalal6.jpg"
)

Image.create(
  car_id: 7,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-103_ohut1h.jpg"
)

Image.create(
  car_id: 7,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-122_lbx1fa.jpg"
)







Image.create(
  car_id: 8,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205287/2018-audi-q5-1_ojxdtm.jpg"
)

Image.create(
  car_id: 8,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205287/2018-audi-q5-2_aesai8.jpg"
)

Image.create(
  car_id: 8,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205287/2018-audi-q5-3_oj87fx.jpg"
)

Image.create(
  car_id: 8,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205287/2018-audi-q5-4_z7hc0u.jpg"
)

Image.create(
  car_id: 8,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205287/2018-audi-q5-5_dhqcra.jpg"
)









Image.create(
  car_id: 9,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205954/2016-Mercedes-Benz-1_uitppo.jpg"
)

Image.create(
  car_id: 9,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205954/2016-Mercedes-Benz-2_ctxe4h.jpg"
)

Image.create(
  car_id: 9,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205953/2016-Mercedes-Benz-3_gce0bt.jpg"
)

Image.create(
  car_id: 9,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205953/2016-Mercedes-Benz-4_cup2nr.jpg"
)

Image.create(
  car_id: 9,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518205954/2016-Mercedes-Benz-5_wduqrh.jpg"
)












Image.create(
  car_id: 10,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-101_kiamez.jpg"
)

Image.create(
  car_id: 10,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-106_ontkv9.jpg"
)

Image.create(
  car_id: 10,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-109_t2gte3.jpg"
)

Image.create(
  car_id: 10,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-141_i1vjm1.jpg"
)

Image.create(
  car_id: 10,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-143_ovdhrh.jpg"
)













Image.create(
  car_id: 11,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518207888/2017-Toyota-Prius_1_s3uj3c.jpg"
)

Image.create(
  car_id: 11,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518207888/2017-Toyota-Prius_2_lkxfej.jpg"
)

Image.create(
  car_id: 11,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518207888/2017-Toyota-Prius_3_rqhnlp.jpg"
)

Image.create(
  car_id: 11,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518207888/2017-Toyota-Prius_4_dpr9ui.jpg"
)

Image.create(
  car_id: 11,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518207888/2017-Toyota-Prius_5_nh24qd.jpg"
)















Image.create(
  car_id: 12,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208525/2017-Jeep-Grand-Cherokee-Trailhawk-1_pswj3z.jpg"
)

Image.create(
  car_id: 12,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208525/2017-Jeep-Grand-Cherokee-Trailhawk-2_exv2kh.jpg"
)

Image.create(
  car_id: 12,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208525/2017-Jeep-Grand-Cherokee-Trailhawk-3_odn9ew.jpg"
)

Image.create(
  car_id: 12,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208525/2017-Jeep-Grand-Cherokee-Trailhawk-4_dpqruk.jpg"
)

Image.create(
  car_id: 12,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208525/2017-Jeep-Grand-Cherokee-Trailhawk-5_wwsbc4.jpg"
)













Image.create(
  car_id: 13,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-105_czxkue.jpg"
)

Image.create(
  car_id: 13,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-104_tmxbzt.jpg"
)

Image.create(
  car_id: 13,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-108_htywql.jpg"
)

Image.create(
  car_id: 13,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-121_wa6pr9.jpg"
)

Image.create(
  car_id: 13,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-127_zbrqju.jpg"
)













Image.create(
  car_id: 14,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-1_mntlfd.jpg"
)

Image.create(
  car_id: 14,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-2_bjp5pb.jpg"
)

Image.create(
  car_id: 14,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-3_oifcbg.jpg"
)

Image.create(
  car_id: 14,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-4_jbdy9p.jpg"
)

Image.create(
  car_id: 14,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-5_qjerxu.jpg"
)














Image.create(
  car_id:15,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209734/2018-Range-Rover-Euro-spec-1_yjtvsg.jpg"
)

Image.create(
  car_id:15,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209734/2018-Range-Rover-Euro-spec-2_vlzupq.jpg"
)

Image.create(
  car_id:15,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209734/2018-Range-Rover-Euro-spec-3_imtgj0.jpg"
)

Image.create(
  car_id:15,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209734/2018-Range-Rover-Euro-spec-4_swidww.jpg"
)

Image.create(
  car_id:15,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518209735/2018-Range-Rover-Euro-spec-5_gfaokl.jpg"
)













Image.create(
  car_id:16,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-108_klx8q9.jpg"
)

Image.create(
  car_id:16,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-106_nenbah.jpg"
)

Image.create(
  car_id:16,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-103_urstw3.jpg"
)

Image.create(
  car_id:16,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-115_veti8n.jpg"
)

Image.create(
  car_id:16,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-116_eczcuz.jpg"
)














Image.create(
  car_id:17,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-126_yi6jcx.jpg"
)

Image.create(
  car_id:17,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-127_b9wp5j.jpg"
)

Image.create(
  car_id:17,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-128_wrpysn.jpg"
)

Image.create(
  car_id:17,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-151_softjh.jpg"
)

Image.create(
  car_id:17,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-153_rq2zwf.jpg"
)















Image.create(
  car_id: 18,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211026/2016-Nissan-Altima-SV-101_zbig7z.jpg"
)

Image.create(
  car_id: 18,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211026/2016-Nissan-Altima-SV-106_enblk9.jpg"
)

Image.create(
  car_id: 18,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211026/2016-Nissan-Altima-SV-110_rluce9.jpg"
)

Image.create(
  car_id: 18,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211026/2016-Nissan-Altima-SV-116_lfqcuq.jpg"
)

Image.create(
  car_id: 18,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211026/2016-Nissan-Altima-SV-118_ilgchx.jpg"
)













Image.create(
  car_id: 19,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211462/2018-Volvo-XC60-T8-101-1_moftf6.jpg"
)

Image.create(
  car_id: 19,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211462/2018-Volvo-XC60-T8-103-1_h5oaoe.jpg"
)

Image.create(
  car_id: 19,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211462/2018-Volvo-XC60-T8-106-1_fez2zw.jpg"
)

Image.create(
  car_id: 19,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211462/2018-Volvo-XC60-T8-120-1_osg0ri.jpg"
)

Image.create(
  car_id: 19,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211462/2018-Volvo-XC60-T8-122-1_js7fv8.jpg"
)











Image.create(
  car_id: 20,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211832/2017-Ford-F-150-Raptor-SuperCab-109_vqztqz.jpg"
)

Image.create(
  car_id: 20,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211833/2017-Ford-F-150-Raptor-SuperCab-110_jtmzjy.jpg"
)

Image.create(
  car_id: 20,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211832/2017-Ford-F-150-Raptor-SuperCab-104_aoavcr.jpg"
)

Image.create(
  car_id: 20,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211832/2017-Ford-F-150-Raptor-SuperCab-120_drnhjt.jpg"
)

Image.create(
  car_id: 20,
  image_url: "http://res.cloudinary.com/aazaiez/image/upload/v1518211832/2017-Ford-F-150-Raptor-SuperCab-121_n0fumx.jpg"
)















Upvote.create(
  review_id: 3,
  user_id: 2
)

Upvote.create(
  review_id: 3,
  user_id: 4
)

Upvote.create(
  review_id: 3,
  user_id: 3
)

Upvote.create(
  review_id: 4,
  user_id: 2
)

Upvote.create(
  review_id: 4,
  user_id: 4
)

Upvote.create(
  review_id: 4,
  user_id: 3
)

Upvote.create(
  review_id: 5,
  user_id: 2
)

Upvote.create(
  review_id: 5,
  user_id: 4
)

Upvote.create(
  review_id: 5,
  user_id: 3
)
