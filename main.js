var username = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var chosen;
var xhr = new XMLHttpRequest();
var queryURL = "https://wind-bow.gomix.me/twitch-api/streams/" + chosen +"?callback=?";
xhr.open("GET", queryURL, true);
xhr.send(null);
xhr.onload = function() {
    if(xhr.status === 200) {
        console.log()
    }
}