# user-data
To solve the problem, we need to create a React application using create-react-app and implement the requirements as listed.

Step 1: Creating a React Application
To create a React application, we can use the create-react-app command-line tool. Open a terminal or command prompt and enter the following command:
-npx create-react-app user-card-grid

This will create a new React application in a folder named "user-card-grid". We can navigate to this folder and start the application using the following commands:
-cd user-card-grid
-code .
-npm run start
This will start a development server and open the application in the browser at http://localhost:3000/.

Step 2: Creating the Navbar Component
We can create a Navbar component in the src directory of our project. This component will display the brand name and a button to fetch user data from the API. Here is the code for the Navbar component:
<img width="753" alt="adm1" src="https://user-images.githubusercontent.com/84613580/228774170-b4f83698-6b97-4ce1-8a8e-08b1cefb2b9b.PNG">

The handleGetUsers function will be passed down as a prop to the Navbar component from the parent component.

Step 3: Creating the User Card Grid Component
We can create a UserCardGrid component to display the user data in a grid layout. 

Here is the code for the UserCardGrid component:<img width="875" alt="adm2" src="https://user-images.githubusercontent.com/84613580/228774556-87e42919-fcb5-40a0-8b17-912da1d42f38.PNG">

This component will receive the 'users' and 'isLoading' props from the parent component.

<img width="613" alt="adm3" src="https://user-images.githubusercontent.com/84613580/228774875-33502e58-ab50-454b-a050-4add48ddc57e.PNG">

In this code, we have defined the handleGetUsers function that makes an API call to fetch the user data from the API endpoint. When the button in the Navbar component is clicked, this function is called, which sets the isLoading state to true to display the loader and makes an API call to fetch the user data. Once the data is fetched, it sets the users state with the fetched data.

---------------------------------------------------------------------Getting a UI-------------------------------------------------------------

Click on 'getUser' button to fetch data from 'json'
<img width="919" alt="adm4" src="https://user-images.githubusercontent.com/84613580/228775882-9cd2b9ba-0023-4a04-90af-014e68d31f1b.PNG">

While clicking on 'Get User' button suddenly we got a loader for very few sec.

<img width="902" alt="adm5" src="https://user-images.githubusercontent.com/84613580/228776111-50bc4f47-b898-46ec-96a6-2da62e0344ff.PNG">

Getting loader when data is take time or don't get data from json

<img width="918" alt="amd7" src="https://user-images.githubusercontent.com/84613580/228776727-e978156e-72fa-4ddc-9916-9d5d39ec4a49.PNG">
