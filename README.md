# Blog Here!
It is a website which allows you to create blogs and post them.
The blogs can be shared with public as well.

## Technology Used
- Frontend
  - React
  - React Router
  - Fetch Api
  - React Context
- Backend
  - Express
  - Mongoose
  - bcrypt
  - JWT

## How to use?
  ### Run the server side code first. 
- Frontend
  The front end is made using create-react-app. 

  First install node on your local machine.

  Download the code files and change directory into client
  
  Run the following code to start the project on localhost:3000

  ``` npm run start ```

  The package.json file has the proxy field which has the url of the backend server running port. Change it accordingly.

- Backend

  The API keys and Secrets are to be created from your end to host it on your database.
  
  MongoDB atlas is used for NoSql database.
  
  Change the directory to server.
  
  Nodemon package is used to run server continuously for development.

  ``` nodemon app ```