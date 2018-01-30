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
        
        // ** HOW DO I TEST THIS????
        // Iterate over all of the friends in the array first.
        for (var i=0; i < friends.length; i++) {
            console.log("Names of the friends: ", friends[i].name);
            let myFriend = friends[i];
            
            // Will need to iterate again to get the scores of the friends and then calculate the differances between the friends and newSurveyScores. Use a hard code example first to try to test the calc before using frontend info.
            var difference = 0
            for (var j=0; j < myFriend.scores.length; j++) { 
                difference += Math.abs(myFriend.scores[j] - newSurveyScores.scores[j]);
                
             }
             console.log("Score Diff: ", difference);
            }


        // Create "match variable" to capture the matching friend information.
        // var match = {
        //     name: "",
        //     photo = "",
        //     message = ""
        // }

        // Needs to be at the end of the Post.
        res.json(friends[0]);
        
    });

};