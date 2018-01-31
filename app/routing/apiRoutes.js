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
        
        // *** Create a new variable to capture the survey answers(scores) that are submitted?????
        var newSurveyScores = req.body;
        
        // Compare user newSurveyScores to friends.scores for grey1, grey2, grey3, grey4, and grey-double.
        // Calculate the differences between the scores:
        // ex. newSurveyScores = [1, 3, 4, 5, 2, 4, 4, 4, 5, 5] - "grey1" friends.scores[0] = [2, 3, 5, 1, 3, 4, 1, 4, 5, 5], etc. for each "grey friend"
        // TotalDiff = 1+1+4+1+3 = 10 (Remember to use Absolute Value! Use Math.abs)
        // The closest match will be the user with the least difference amount. 
        
        // ** TO TEST THIS ** Use Postman to manually add a survey response, click post and see results of the code below.
        var differenceArray = [];
        // Part 1. A. Iterate over all of the friends in the array first.
        for (var i=0; i < friends.length; i++) {
            console.log("Names of the friends: ", friends[i].name);
            var myFriend = friends[i];
            
            // Part 1. B. Iterate again to get the scores of the friends and then calculate the differances between the friends and newSurveyScores. 
            var difference = 0

            for (var j=0; j < myFriend.scores.length; j++) { 
                difference += Math.abs(myFriend.scores[j] - newSurveyScores.scores[j]);
                
             }
             console.log("Score Diff: ", difference);
                differenceArray.push(difference);
                console.log("Differance Array: ", differenceArray);
            }
           
            // Part 2. of the post code, loop over the differenceArray to isolate the lowest one. (Or, just use Math min???)
            // Use Math min value to find lowest score. https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript:
            var minScore = Math.min.apply(Math, differenceArray)
            console.log("Minimum Score: ", minScore);

            // ** How do I match my minScore back up to the correct friend? **

            // Create "match variable" to capture the matching friend information. ** This is hard coded right now. **
            var bestMatch = {
                 name: friends[0].name,
                 photo: friends[0].photo,
                 message: friends[0].message,
                 score: minScore 
            };
            console.log("Hard Code:", bestMatch);

        // Needs to be at the end of the Post. This is the match result. Will be bestMatch variable.
        res.json(bestMatch);
        
    });

};