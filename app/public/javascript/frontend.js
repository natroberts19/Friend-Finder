// FRONT END JAVASCRIPT FILE: This javascript file will hold all the front-end (client) javascript functionality for both home.html and survey.html.
// Essentially this code drives the click functions and "POSTS" our survey data to our express server.
    // When the user hits submit on the survey.html page, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/friends)... and then runs the associated code (found in api-routes.js). That code then compares the surveyData submitted with the form to all of the scores in the friends array of objects.


// Home.html will need a click function for the "Take the Survey" button.



// Survey.html will need a click function to "Submit" the survey data and to run the modal actions.