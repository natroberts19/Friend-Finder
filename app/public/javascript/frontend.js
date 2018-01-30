// FRONT END JAVASCRIPT FILE: This javascript file will hold all the front-end (client) javascript functionality for survey.html.
// Survey.html will need a click function to "Submit" the survey data and to run the modal actions.

// Essentially this code drives the click functions and "POSTS" our survey data to our express server.
// When the user hits submit on the survey.html page, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/friends)... and then runs the associated code (found in api-routes.js). That code then compares the surveyData submitted with the form to all of the scores in the friends array of objects.

$("#survey-button").on("click", function (event) {
        event.preventDefault();

        // Here we grab the answers from the drop-down list questions on survey.html.
        var newSurveyScores = {
            Q1: $("#Q1").val().trim(),
            Q2: $("#Q2").val().trim(),
            Q3: $("#Q3").val().trim(),
            Q4: $("#Q4").val().trim(),
            Q5: $("#Q5").val().trim(),
            Q6: $("#Q6").val().trim(),
            Q7: $("#Q7").val().trim(),
            Q8: $("#Q8").val().trim(),
            Q9: $("#Q9").val().trim(),
            Q10: $("#Q10").val().trim()
        };
        console.log("Capture newSurveyScores:", newSurveyScores);
       
        $.post('/api/friends', newSurveyScores).then(function (data) {
            console.log(data)
        })

});

// Will need to push the match data to the modal pop up window.
// Push the result to the modal pop up. <div id="modal-text">
// Use jQuery .modal method?

        // ** I think I need to export this file??? **