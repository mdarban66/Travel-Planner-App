# Travel Planner App
A Udacity Web app project (https://github.com/udacity/fend/tree/refresh-2019)

## Overview
Travel Planner is an asynchronous web app that employs Web API and data entered by the user to update the User Interface in a dynamic way. It deploys Geonames API to provide latitude, longitude, country, ... for a location data in form of city/zipcode. Then, the Weatherbit API is integrated such that the weather information for current or future will be presented based on the location information provided by the Geonames API. In addition, an image related to the destination location is illustrated in the app using Pixabay API. Node.js and express are used to connect to the corresponding APIs and update the user interface for the user. By the same token, the traveler app requests the user to provide the city name or zipcode of the destination, as well as departure and return date, and it provides information about destination, trip details, and weather forecast for the target city. 

## How to Run
The Travel Planner app can be run by following these steps:
1. Redirect to the root of the project's folder
2. npm install
3. npm run build-prod
4. npm start 
5. In your default browser, enter "http://localhost:8080/" in the address bar
6. Enter the zip-code or city-name of the target place, along with departure and return dates; then click on the Submit button to see the results.
   
## How to Test
The Travel Planner app can be tested for the provided test cases by the following steps:
1. Redirect to the root of the project's folder
2. npm run test
   
