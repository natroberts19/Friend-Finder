// FRONT END JAVASCRIPT FILE: This javascript file will hold all the front-end (client) javascript functionality for survey.html.
// Survey.html will need a click function to "Submit" the survey data and to run the modal actions.

// Essentially this code drives the click functions and "POSTS" our survey data to our express server.
// When the user hits submit on the survey.html page, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/friends)... and then runs the associated code (found in api-routes.js). That code then compares the surveyData submitted with the form to all of the scores in the friends array of objects.

$("#survey-button").on("click", function (event) {
        event.preventDefault();

        // Grab the answers from the drop-down list questions on survey.html.
        var newSurveyScores = {
                scores: [
                        $("#Q1").val().trim(),
                        $("#Q2").val().trim(),
                        $("#Q3").val().trim(),
                        $("#Q4").val().trim(),
                        $("#Q5").val().trim(),
                        $("#Q6").val().trim(),
                        $("#Q7").val().trim(),
                        $("#Q8").val().trim(),
                        $("#Q9").val().trim(),
                        $("#Q10").val().trim()
                ]
        };
        console.log("Capture newSurveyScores:", newSurveyScores);

        // This posts the match data to the modal for display to the user. "Data" is the object for the bestMatch variable determined in the apiRoutes file.
        $.post("/api/friends", bestMatch,
                function (data, bestMatch) {
                        // data is what holds the matching friend (whatever was sent by res.json in apiRoutes)
                        console.log(data)
                        // Need to grab the results of the bestMatch from the backend.
                        // Push the bestMatch data to the modal pop up window.
                        // Use jQuery .modal method to pop the modal window.
                        // ============================================================
                        $("#match-name").html(data.name);
                        $("#match-pic").attr("src", data.photo);
                        $("#match-message").html(data.message);
                        $("#openModal").modal("toggle");

                })

});