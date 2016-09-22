get_twitter_text("OAK");

function get_twitter_text(team) {

  var nfl_twitter_handles = ["Ravens","Bengals", "Browns", "steelers", "ChicagoBears",
    "Lions", "packers", "Vikings", "HoustonTexans", "Colts", "Jaguars", "Titans", "AtlantaFalcons",
    "Panthers", "Saints", "TBBuccaneers", "buffalobills", "MiamiDolphins", "nyjets", "dallascowboys",
    "Giants", "Eagles", "Redskins", "Broncos", "Chiefs", "Chargers", "AZCardinals", "RamsNFL", "49ers", "Seahawks",
    "Patriots","RAIDERS"];
  
  switch (team){
    case "BAL":
      team_name = nfl_twitter_handles[0];
      break;
    case "CIN":
      team_name = nfl_twitter_handles[1];
      break;
    case "CLE":
      team_name = nfl_twitter_handles[2];
      break;
    case "PIT":
      team_name = nfl_twitter_handles[3];
      break;
    case "CHI":
      team_name = nfl_twitter_handles[4];
      break;
    case "DET":
      team_name = nfl_twitter_handles[5];
      break;
    case "GB":
      team_name = nfl_twitter_handles[6];
      break;
    case "MIN":
      team_name = nfl_twitter_handles[7];
      break;
    case "HOU":
      team_name = nfl_twitter_handles[8];
      break;
    case "IND":
      team_name = nfl_twitter_handles[9];
      break;
    case "JAX":
      team_name = nfl_twitter_handles[10];
      break;
    case "TEN":
      team_name = nfl_twitter_handles[11];
      break;
    case "ALT":
      team_name = nfl_twitter_handles[12];
      break;
    case "CAR":
      team_name = nfl_twitter_handles[13];
      break;
    case "NO":
      team_name = nfl_twitter_handles[14];
      break;
    case "TB":
      team_name = nfl_twitter_handles[15];
      break;
    case "BUF":
      team_name = nfl_twitter_handles[16];
      break;
    case "MIA":
      team_name = nfl_twitter_handles[17];
      break;
    case "NYJ":
      team_name = nfl_twitter_handles[18];
      break;
    case "DAL":
      team_name = nfl_twitter_handles[19];
      break;
    case "NYG":
      team_name = nfl_twitter_handles[20];
      break;
    case "PHI":
      team_name = nfl_twitter_handles[21];
      break;
    case "WAS":
      team_name = nfl_twitter_handles[22];
      break;
    case "DEN":
      team_name = nfl_twitter_handles[23];
      break;
    case "KC":
      team_name = nfl_twitter_handles[24];
      break;
    case "SD":
      team_name = nfl_twitter_handles[25];
      break;
    case "ARI":
      team_name = nfl_twitter_handles[26];
      break;
    case "LA":
      team_name = nfl_twitter_handles[27];
      break;
    case "SF":
      team_name = nfl_twitter_handles[28];
      break;
    case "SEA":
      team_name = nfl_twitter_handles[29];
      break;
    case "NE":
      team_name = nfl_twitter_handles[30];
      break;
    case "OAK":
      team_name = nfl_twitter_handles[31];
      break;
    default:
      alert("An issue occurred");
  }
}


$.ajax({
  dataType: 'json',
  data: {
    action: "user",
    screen_name: team_name
  },
  method: "POST",
  url: "http://s-apis.learningfuze.com/hackathon/twitter/index.php",
  success: function (response) {
    
    //   NEED TO FINISH creating variable for this to work
    var twitter_text_msg = "news"+i;
    
    //this represents the entire twitter object
    var tweet_block = response;
    //this represents the team name
    var team_name = (tweet_block.info.name);
    //this represents the team tweet
    var latest_tweet = (tweet_block.info.status.text);
    //var latest_tweet = (tweet_block.info.description);
    $(twitter_text_msg).text(team_name + ": " + latest_tweet);
    //this is just a text
    console.log(tweet_block);
    //get tweet message : console.log(tweet_block.info.description);
  }
});
