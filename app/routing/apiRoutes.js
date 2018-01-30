// ===============================================================================
// LOAD DATA
// We are linking our routes to the exported "data" source friends.js.
// friends.js holds the array of "friend" information.
// ===============================================================================
var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// Exporting these so they can be used by other files.
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a survey form and thus submits data to the server.
    // When a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // BACK END JAVASCRIPT: Add the code here to complete the matching logic behind the scenes based on survey data that was entered.
        // Create variable to capture the survey answers(scores) that are submitted:
        res.json(friends);
        
        // Now compare user newSurveyScores to friends.scores for grey1, grey2, grey3, grey4, and grey-double.
        // Calculate the differences between the scores:
        // ex. newSurveyScores = [1, 3, 4, 5, 2, 4, 4, 4, 5, 5] - "grey1" friends.scores[0] = [2, 3, 5, 1, 3, 4, 1, 4, 5, 5], etc. for each "grey friend"
        // TotalDiff = 1+1+4+1+3 = 10 (Remember to use Absolute Value! Use Math.abs)
        // Iterate over the friends array first.
        // Calculate the differences for each friend (Iterate again??)
        // The closest match will be the user with the least difference amount. 
        friends.forEach(function(friend) {
            console.log("forEach for friend array: ", friend);

            // var difference = 0
            // newSurveyScores.forEach(function(match) {
            //     difference += Math.abs(friends.scores - newSurveyScores);
            // })
        })
        
    });

};