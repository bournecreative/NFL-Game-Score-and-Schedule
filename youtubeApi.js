/**
 * Created by OF on 9/20/16.
 */


function ajaxYoutube(team, homeAway, data) {
    var id_array = [];

    var team_name = null;
    console.log("your team is:"+team)
//converts team name data to twitter names which is used in youtube search to get videos
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




        var Data = {q: "nfl "+team_name+" mixtape", maxResults: 1, type: 'video', detailLevel: 'verbose'};
    $.ajax({
        dataType: 'json',
        method: 'post',
        url: "http://s-apis.learningfuze.com/hackathon/youtube/search.php",
        data: Data,
        success: function (response) {
            //console.log("Success call ajaxYoutube", response);
            var list_obj = response.data;
            //console.log(list_obj);
            for (var i in response.data) {
                //console.log(i);
                var obj_snippet = response.data[i].snippet.channelTitle;
                //console.log(obj_snippet);
                if (obj_snippet != "NFL"){
                    id_array.push(i);
                }
//takes twitter names and gets us url of videos
            }
            //console.log(id_array);
            var array_length = id_array.length;
            //console.log(array_length);
            var random = Math.floor(Math.random() * array_length);
            //console.log(random);
            var video_id = id_array[random];
            //console.log(video_id);
            //console.log('result', video_id);
            var url = 'https://www.youtube.com/embed/' + video_id;
            console.log("url: ", url);
            //video_id = $('<iframe>').attr('src', url).css('width', "100%", 'height', '100%');
            /*$('body').append(video_id);*/

//adds iframe to correct location with correct videos
            var youVideo = $('<iframe frameborder="0">').attr('src', url).css('width', "100%", 'height', '100%');
            //console.log(youVideo);
            if(homeAway == 1){
                $("#1vid" + data).append(youVideo);
            }else{
                $("#2vid" + data).append(youVideo);
            }
        }
    })
}
