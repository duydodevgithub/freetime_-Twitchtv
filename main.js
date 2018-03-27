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
        if(response.stream != null) {
            // console.log(response);
            live += "<tr>" + "<td>" + elem + "</td>"+ "<td>" + response.stream.game + "</td>" + "<td>Live</td>" + "<td>" + response.stream._links.self+ "</td>"+ "</tr>";
        } else {
            console.log(response._links);
            
            offline += "<tr>" + "<td>" + elem + "</td>"+ "<td>" + response._links.self + "</td>" + "<td>Offline</td>" + "<td></td>" + "</tr>";
        }

        all = live + offline;
        $("#list").html("<tr><th>Channel</th><th>Content</th><th>Status</th><th>URL</th></tr>");    
        $("#list").append(all);
    })
})

$("#live").on("click", function(){
    $("#list").html("<tr><th>Channel</th><th>Content</th><th>Status</th><th>URL</th></tr>");    
    $("#list").append(live);
});

$("#offline").on("click", function(){
    $("#list").html("<tr><th>Channel</th><th>Content</th><th>Status</th><th>URL</th></tr>");
    $("#list").append(offline);
});
$("#all").on("click", function(){
    $("#list").html("<tr><th>Channel</th><th>Content</th><th>Status</th><th>URL</th></tr>");    
    $("#list").append(all);
})