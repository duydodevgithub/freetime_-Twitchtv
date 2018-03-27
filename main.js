var username = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var all = "";
var live = "";
var offline = "";
username.forEach(function(elem){
var queryURL = "https://wind-bow.gomix.me/twitch-api/streams/" + elem +"?callback=?";
$.ajax({
        url: queryURL,
        crossDomain: true,
        dataType: "jsonp",
        method: "GET"
    }).done(function(response){
        console.log(response);
        if(response.stream != null) {
            live += "<p>" + elem +"</p>";
        } else {
            offline += "<p>" + elem + "</p>";
        }

        all = live + offline;
    })
})

$("#live").on("click", function(){
    $("#content").html(live);
});

$("#offline").on("click", function(){
    $("#content").html(offline);
});

$("#all").on("click", function(){
    $("#content").html(all);
})