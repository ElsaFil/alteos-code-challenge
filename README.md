# alteos-code-challenge

## Task:
* Build a NodeJS Express backend that links to a database service of your choosing (mongoDB, postgres, MySQL etc.).
  * On starting the backend for the first time, upload and store the provided JSON seed file in a table called data.
  * Expose an endpoint to fetch all the data from the table.
* Create a React component that can search for data retrieved from the endpoint you exposed in part (1).
  * On load, component should fetch all data from backend and display it in a manner of your choosing.
  * Create a search bar that automatically updates the results you display to the user as they type. Keep in mind good performance.
* Containerise your application using Docker (https://www.docker.com/get-started) 3.1. The frontend, backend and database should exist in their own containers. 3.2. You should use docker-compose to run your application.

Bonus:
* Use of Typescript instead of Javascript.
* Use of SASS for styling.
* Use of async/await is highly encouraged.

## Notes

* populating database: initially I had some code that I manually commented out after the first run, later on, I moved it inside a POST route that also checks if there is any existing data. When you run the app the first time, you will need to make a POST request (e.g. with postman) to `http://localhost:5555/api/contacts`
* I would like some more feedback about my dockerization because it's the first time I did it. Any comment is useful, and these are some specific questions I have:
  * "docker-compose up" didn't seem to take any new changes. I always had to run "docker system prune -a" in between. I guess it uses existing images by default. I would like to know if there is some way to overcome this.
  * after dockerization, because I had to change the mondoDB path, it's not possible to run locally anymore and connect to the database. Is there a way to keep local working app?
* Overall this was a very interesting challenge! I managed to learn some new things like docker and how to support sass. 
* Time estimation: I managed to do the first 2 points in around 2-3 hours total and then dockerization took me a long time.
