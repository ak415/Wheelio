# [Wheelio live](https://wheelio.herokuapp.com/#/)

Wheelio is a single page app inspired by Yelp and Edmunds.com and created using a React/Redux frontend and Ruby on Rails backend. 
It makes it easy for users to read reviews about cars from current and previous owners. Getting a non-biased perspective about the vehicles allows better due diligence for those looking into purchasing a specific vehicle. 

![Wheelio Home Page][]

## Features

### Review Creation

Without signing up, visotors can search for cars and read reviews from other users. Once signed up, users can post and upvote reviews.
After creating a review and posting it, user can edit it or delete it.

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


![Car show page][]


### Search

A search was implemented allowing responding to the query string with an ajax call that fetches the cars from the database.

![search][]

## Future Directions

* users should be able to submit photos and have them imbedded in their reviews.
* users should be able to access the search bar regardless of the page their are accessing.
* users should be able to log in user their Google credentials

