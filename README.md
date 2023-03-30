<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 12301149cca3309d1446148e24581782f1307d87
