# Dashboard

npm and yarn is required for the application.

=================================================================================================================

Backend:

To using the application,

Please type {npm install} in ubuntu or terminal first.

Then set up a database server. 

After setting up the database server, Please create a .env inside backend server.

Content of the .env please refer to the sample.env in backend folder.

--------------------------------------------------------------------------------------------------------

Please type {knex migrate:latest} in ubuntu or terminal  to create database in your database server.

After that, please type {knex seed:run} in ubuntu or terminal to insert the first admin account into the server.

The username of the account : admin
The password of the account : password

The above username and password and be edit in 01seed_user.js and 02seed_user_info.js in seeds folder.

--------------------------------------------------------------------------------------------------------

After adding the first account, please type {node} in ubuntu or terminal to start running the backend.

=================================================================================================================

Frontend:

Please type {yarn install} in ubuntu or terminal first.

Please create a .env file. The content inside should be same as the sample.env inside the frontend folder.

Then type {yarn start} in ubuntu or terminal to start running the frontend.

The browser should be poped up with the application.

Otherwise, please to go localhost:3000 in browser to use the application.

=================================================================================================================






