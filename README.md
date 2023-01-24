# Course Forum

Web app for university students to discuss courses, created as a hobby project. The idea for this project was influenced by [Jodel](https://jodel.com), which lets its users send anonymous messages to threads visible to everyone.

App is currently hosted at [course-forum.herokuapp.com](https://course-forum.herokuapp.com) but only a small number of courses from University of Oulu Computer Science and Engineering degree programme is included.

## Functionalities

### View courses
View all courses available for discussion

### Threads
View and create message threads under courses.

### Messaging
Browse and send messages to threads. To prevent spam, each user can send one message every 3 minutes.

## Technologies

Tech stack used to create Course Forum:

| Component | What was used? |
|-----------|----------------|
| Frontend  | React, CSS     |
| Backend   | ExpressJS      |
| Database  | MongoDB Atlas  |

### API endpoints

Data from these endpoints is returned as JSON objects

#### GET:
* /api/courses
    * Get all available courses in database
    * Returns `{id: String, name: String}`
* /api/courses/{course_id}
    * Get threads in course specified by `course_id`
    * Returns `{id: String, name: String}`
* /api/courses/{course_id}/{thread_id}
    * Get messages in thread specified by `thread_id` located in course `course_id`
    * Also checks if user can participate in discussion and returns the result of this check in `canParticipate`
    * Returns `{topic: String, canParticipate: boolean, messages: Array}`

#### POST:
* /api/courses/{course_id}
    * Start a new thread in specified course
    * Body expected: `{threadName: String}`
* /api/courses/{course_id}/{thread_id}
    * Post a new message to a thread
    * Body expected: `{message: String}`