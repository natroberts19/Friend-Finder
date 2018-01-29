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

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/friends", newSurveyScores,
        function (data) {

            console.log("Post survey scores:", data);

            // Clear the form when submitting
            $("#Q1").val("Choose");
            $("#Q2").val("Choose");
            $("#Q3").val("Choose");
            $("#Q4").val("Choose");
            $("#Q5").val("Choose");
            $("#Q6").val("Choose");
            $("#Q7").val("Choose");
            $("#Q8").val("Choose");
            $("#Q9").val("Choose");
            $("#Q10").val("Choose");
        });

});

// This code is how form data is loaded from the server
// In this code, jQuery is used to "download" the data from our server
// We then dynamically display this content in our table. This is very similar to the group projects you just completed.
// It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

function runMatchQuery() {

    // Here we get the location of the root page.
    // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
    var currentURL = window.location.origin;

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({
            url: currentURL + "/api/friends",
            method: "GET"
        })
        .then(function (surveyData) {

            // Here we are logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------");
            console.log("URL: " + currentURL + "/api/friends");
            console.log("------------------------------------");

            // Here we then log the surveyData to console, where it will show up as an object.
            console.log(surveyData);
            console.log("------------------------------------");

            // Loop through and display the best match in the modal pop up. ** Need lots of work here...**
            // for (var i = 0; i < surveyData.length; i++) {

            //     // Create the HTML and add the friend content.
            //     var newFriend = $("<div>");
            //     newFriend.addClass("well");
            //     newFriend.attr("");
            //     $("#modal-text").append(newFriend);


            //     // Then display the remaining fields in the HTML (Name, Picture, Message)
            //     $("#modal-text").append("<p>" + newFriend.name + "<br>" + newFriend.photo + "<br>" + newFriend.message+ "</p>");
            // }
        });
}


// Not sure if I need this...This function resets all of the data in our tables. This is intended to let you restart a demo.
function clearData() {

    var currentURL = window.location.origin;
    $.ajax({
        url: currentURL + "/api/clear",
        method: "POST"
    });

}

$("#clear").on("click", function () {
    alert("Clearing...");
    clearTable();

    // Refresh the page after data is cleared
    location.reload();

});


// Run Query!
// ==========================================
// runMatchQuery();

// ** I think I need to export this file??? **