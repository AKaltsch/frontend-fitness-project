# frontend fitness project
Flat Iron final project

## Project Pitch ##
The app I would like to create(name to be determined) would be an interactive, social, fitness tracker. Often times when people try to get into shape, they are most successful when they do it with someone else. This is because having someone else there will help motivate you and drive you in times when you're feeling lazy or distracted. Also, it would be a way for friends, who live far apart, to train together for an event such as a marathon or spartan race. The app I am proposing would help workout buddies keep track of each others progress, keep track of your own progress, motivate eachother, and inspire a little freiendly competition.

## User Stories ##
- As a user, I want to be able to create an account so that I can log ina and use the app
- As a user, I want to be able to create new workouts and have those workouts persist through logging in/out
- As a user, I want to be able to add data(weight, reps, time) to my created workouts anytime I am logged in, and have the data persist through logging in/out
- As a user, I want to be able to see graphs of my progress for each workout
- As a user, I want to also be able to keep track of my weight through entries and a graph
- As a user, I want to be able to send requests to follow someone else
- As a user, I want to be able to accept or deny follow requests
- As a user, I want to be able to compare my progess with someone else I follow in a side by side progress graph comparison

## Stretch Goals ##
- As a user, I would like to be able to have my own comment feed where me and my followers can leave comments and posts
- As a user, I want to be able to upload a profile picture
- As a User, I want to be able to mark my outdoor activities on a map, where I would be able to leave a description, title, and upload a photo of the location

## Models and Relationships ##

![image](https://user-images.githubusercontent.com/79191638/137238987-62deffb9-a9e4-4fbd-9ad9-999bfac1915c.png)

### User ###

A ```User``` has many ```Exercises```, and has many ```Workouts``` through ```Exercises```

- id
- name
- username
- password_digest

### Workout ###

A ```Workout``` has many ```Exercises``` and ```Posts```, and has many ```Users``` through ```Exercises```

- id
- name
- type

### Exercise ###

An ```Exercise``` belongs to ```User``` and ```Workout```, and has many ```DataEntries```

- id
- name
- description
- image_url
- type
- workout_id
- user_id

### DataEntry ###

A ```DataEntry``` belongs to ```Exercise```

- id
- exercise_id
- sets
- reps
- weight
- time

### Post ###

A ```Post``` has one ```User```

- id 
- user_id
- title
- body

## API ##

### Routes ###

__GET__: *"/me"*
Returns the current users details, JSON response:
```json
{
  id: 1
  name: "Joe Shmoe"
  username: "user1"
}
```
__GET__: *"/user/:id/posts"*
Returns all posts from a user, based off of their user ID
```json
{
  id: 0
  user_id: 1
  title: "First Post"
  body: "Making my first post..."
}
{
  id: 1
  user_id: 1
  title: "Second Post"
  body: "Making my second post..."
}
....
```
__POST__: *"/subscribe"*
This will allow a user to signup for the website

__GET__: *"/user/login"*
This will allow a user to login

__PATCH__: *"/post/:id"*
This will allow a user to edit one of their posts

__DELETE__: *"/post/:id"*
This will allow a user to DELETE one of their posts

__POST__: *"/workouts"*
This will allow a user to create a new workout

__GET__: *"/user/id:/workouts"*
This will allow a user to see all of hteir workouts

__DELETE__: *"/workouts/:id"*
This will allow a user to delete a workout

__PATCH__: *"/workouts/:id"*
This will allow a user to edit a workout

__GET__: *"/exercises"*
Returns a list of all exercises available


## Backend Repo Link ##

https://github.com/AKaltsch/backend-fitness-project.git