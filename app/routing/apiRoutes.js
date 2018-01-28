// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds the array of "friend" information.
// ===============================================================================
var friends = require("../data/friends");

// ===============================================================================
// ROUTING
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
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Add the code here to complete the matching logic behind the scenes based on survey data that was entered.
        // create variable to capture the survey answers(scores) that are submitted:
        var surveyData = req.body.scores;
        // create an empty array variable to store the numbers:
        var surveyScores = [];
        // Now compare user surveyScores to friends.scores for grey1, grey2, grey3, grey4, and grey-double.
        // Calculate the differences between the scores:
        // ex. surveyScores = [1, 3, 4, 5, 2, 4, 4, 4, 5, 5] - "grey1" friends.scores[0] = [2, 3, 5, 1, 3, 4, 1, 4, 5, 5], etc. for each "grey friend"
        // TotalDiff = 1+1+4+1+3 = 10 (Remember to use Absolute Value!)
        // The closest match will be the user with the least difference amount. 
        // Push the result to <div id="modal-text">

    });

    // ---------------------------------------------------------------------------
    // Not sure if I need this!

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        surveyScores = [];

        console.log(surveyScores);
    });
};