$(document).ready(function(){
  
  var nfl_teams= ["Ravens","Bengals","Browns","steelers","ChicagoBears","Lions","packers","Vikings","HoustonTexans","Colts","Jaguars","Titans","AtlantaFalcons","Panthers","Saints","TBBuccaneers","buffalobills","MiamiDolphins","nyjets","dallascowboys","Giants","Eagles","Redskins","Broncos","Chiefs","Chargers","AZCardinals","RamsNFL","49ers","Seahawks"];
  
  var team_team = nfl_teams[10];
  
    $.ajax({
      dataType: 'json',
      data: {
        action: "user",
        screen_name: team_team
      },
      method: "POST",
      url: "http://s-apis.learningfuze.com/hackathon/twitter/index.php",
      success: function (response) {
        var tweet_block = response;
        var team_name = (tweet_block.info.name);
        
        var latest_tweet = (tweet_block.info.status.text);
        //var latest_tweet = (tweet_block.info.description);
        
        $(".twitter_text").text(team_name + ": " + latest_tweet);
        console.log(tweet_block);
        
        //get tweet message : console.log(tweet_block.info.description);
      }
    });
  
  

});