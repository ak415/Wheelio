# Wheelio

## [Live Demo](https://wheelio.herokuapp.com/#/)

Wheelio is a single page app inspired by Yelp and Edmunds.com and created using a React/Redux frontend and Ruby on Rails backend.
It makes it easy for users to read reviews about cars from current and previous owners. Getting a non-biased perspective about the vehicles allows better due diligence for those looking into purchasing a specific vehicle.

![](https://github.com/aazaiez/Wheelio/blob/master/Docs/Homepage.png?raw=true)

## Features

### Login/Sign up Page

Secure frontend to backend user authentication using BCrypt

![](https://github.com/aazaiez/Wheelio/blob/master/Docs/Sign_up.png?raw=true)


### Review Creation

Without signing up, visitors can search for cars and read reviews from other users. Once signed up, users can post and upvote reviews.
After creating a review and posting it, users can edit it or delete it.

In order to submit a review, users are required to provide a rating that impacts the car's average rating. Once a review is submitted, they are redirected to the car's page where they can see their post.  



### Review update

Upon mounting, the review form autofills with the review information. Users can only update and delete their own reviews.

### Car show

The car's show page displays the following information about the car:
* Photos
* Average score (based on users' input)
* Price
* EPA (MPG)
* Acceleration (0-60)
* top speed
* Description


![](https://github.com/aazaiez/Wheelio/blob/master/Docs/car_show.png?raw=true)


### Search

A search was implemented allowing responding to the query string with an ajax call that fetches the cars from the database.

One of the biggest hurdles encountered while implementing the search was being able to take the full user input into consideration when the car's year, make, and model are entered into the search box. This was handled within the car's model on the backend by splitting the user's full query string into substrings an running them separately against the database prior to joining results and display the matching cars. 

```ruby
def self.search(query)
  new_query = query.split(" ")
  results = []
  new_query.each do |query|
    year_results = (Car.where("(cars.year) = ?" , "#{query}".to_i))
    make_results = Car.where("(cars.make) ilike ?", "%#{query}%")
    model_results = (Car.where("(cars.model) ilike ?" , "%#{query}%"))
    (make_results + year_results + model_results).each do |result|
      results << result
    end
  end
  if results == []
    results = Car.all
  end
  return results
end
```



![](https://github.com/aazaiez/Wheelio/blob/master/Docs/search_page.png?raw=true)

## Future Directions

* users should be able to submit photos and have them imbedded in their reviews.
* users should be able to access the search bar regardless of the page their are accessing.
* users should be able to log in user their Google credentials
