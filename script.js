var up_down_flag="down";
var number_of_games = 16; //array length for number of games
var current_week = 5;
var year = 2016;
var score_box_data = null; // ** Holds all the data from the fantasy website


/**
 * Function to pull API score data from a season and week in NFL Football and console.logs it out
 * @param {Number} season A year whose scores you are looking for
 * @param {Number} week A week whose scores you are looking for
 * @example score_box(2016, 2)
 */
function score_box(season, week){
    console.log("yayaya");
    var data_url = "https://api.fantasydata.net/v3/nfl/stats/JSON/BoxScores/"; //2016/2?
    data_url += season + "/" + week + "?";

    console.log(data_url);
    $(function() {
        var params = {
            // Request parameters
        };

        $.ajax({
            url: data_url + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","d45a86224730419e9ad259d2353105ad");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
            .done(function(data) {
          //             alert("success");
                score_box_data = data;
                display_data(season, week);
                generate_schedule_d();
                generate_schedule_m();
            })
            .fail(function() {
                alert("error");
            });
    });
}
/**
 * Displays the data pulled from the API via console.logs
 * @param {Number} game_season The year of interest
 * @param {Number} game_week The week in the year of interest
 */
function display_data(game_season, game_week){
    console.log("Season: " + game_season + " | Week: " + game_week);
    console.log("-------------------------");
    for(var game_index in score_box_data){
        var general_game_data = score_box_data[game_index].Score;
        var home_team = general_game_data.HomeTeam;
        var home_score = general_game_data.HomeScore;
        var away_team = general_game_data.AwayTeam;
        var away_score = general_game_data.AwayScore;

        var game_time = general_game_data.Date;

        console.log("Home Team: " + home_team + " | Score: " + home_score);
        console.log("Away Team: " + away_team + " | Score: " + away_score);
        console.log("Time: " + game_time);
        console.log("");
    }
}


$(document).ready( function (){
    score_box(year,current_week);
    click_handlers();
    set_date();
    gen_weeks(current_week);
});
function gen_weeks(val){

    for(i=1; i<=17;i++) {
        var week = $('<li>').attr('id', 'week' + i).text(' '+" Week "+i+' ');
        if(val==i){
            week.addClass('current')
        }
        $('.week').append(week);
    }
}

function set_date(){
    var date = Date();
    $(".date").append(date);
}

function click_handlers (){
    $('.down').click(function (){
        var data = $(this).data('position');
        $('#game_menu'+data).slideToggle();

        if(up_down_flag == "down") {
            $('#down' + data).removeClass().addClass('up');
            $('#info'+data).text('LESS NEWS')
            up_down_flag="up";
        }
        else{
            $('#down' + data).removeClass().addClass('down');
            $('#info'+data).text('MORE NEWS')
            up_down_flag="down";
        }
    })
};

function generate_schedule_d() {
    for (i = 0; i < number_of_games; i++) {
        var general_game_data = score_box_data[i].Score;
        var home_team = general_game_data.HomeTeam;
        var home_score = general_game_data.HomeScore;
        var away_team = general_game_data.AwayTeam;
        var away_score = general_game_data.AwayScore;
        var quarter = general_game_data.QuarterDescription;
        var date = general_game_data.Date;


        var game1 = $('<div>').attr('id', 'game' + i).addClass('game_box');
        var score1 = $('<div>').attr('id', 'score' + i).addClass('score');
        var vid1 = $('<div>').attr('id', 'vid' + i).addClass('video').text('video stuffs here');
        var news1 = $('<div>').attr('id', 'news' + i).addClass('news').text('twitter stuffs');
        var weather1 = $('<div>').attr('id', 'weather' + i).addClass('weather').text('weather stuffs');
        var game_menu = $('<div>').attr('id', 'game_menu' + i).addClass('game_menu');
        var down1 = $('<div>').addClass('down').data('position',i).attr('id', 'down' + i);
        var info1=$('<div>').addClass('info').text('MORE NEWS').attr('id', 'info' + i);
        $('.landing1').append(game1,game_menu);
        $('#game_menu'+i).append(news1,vid1);
        $('#game'+i).append(weather1,score1,info1,down1);

        var home_team1 = $('<div>').attr('id', 'home_team' + i).addClass('score_board').text(home_team);
        var game_time1 = $('<div>').attr('id', 'game_time' + i).addClass('score_board');
        var away_team1 = $('<div>').attr('id', 'away_team' + i).addClass('score_board').text(away_team);
        $('#score'+i).append(away_team1,game_time1,home_team1);

        var logo_home1 = $('<div>').addClass('logo').css('background-image','url(images/'+home_team+'.png)');
        var logo_away1 = $('<div>').addClass('logo').css('background-image','url(images/'+away_team+'.png)');
        var home_score1= $('<div>').addClass('score_numbers').text(home_score);
        var away_score1= $('<div>').addClass('score_numbers').text(away_score);
        var score_time = $('<div>').addClass('score_time').text(quarter);
        var datey = $('<div>').addClass('score_time').text(date);
        $('#home_team'+i).append(logo_home1);
        $('#away_team'+i).append(logo_away1);

        if(quarter != "") {
            $('#game_time' + i).append(score_time);
        }
        else{
            $('#game_time' + i).append(datey);
        }

        if(home_score != null){
            $('#home_team'+i).append(home_score1);
            $('#away_team'+i).append(away_score1);
        }

        if (i % 2 == 0) {
            $('.landing1').append(game1,game_menu,down1);
        }
        else {

            $('.landing2').append(game1,game_menu,down1);

        }
    }
}
function generate_schedule_m() {
    var number_of_games = 16;
    for (i = 0; i < number_of_games; i++) {
        var game1 = $('<div>').attr('id', 'game_m' + i).addClass('game_box');
        var score1 = $('<div>').attr('id', 'score_m' + i).addClass('score');
        var vid1 = $('<div>').attr('id', 'vid' + i).addClass('video').text('video stuffs here');
        var news1 = $('<div>').attr('id', 'news' + i).addClass('news').text('twitter stuffs');
        var weather1 = $('<div>').attr('id', 'weather' + i).addClass('weather').text('weather stuffs');
        var game_menu = $('<div>').attr('id', 'game_menu_m' + i).addClass('game_menu');
        var down1 = $('<div>').addClass('down').data('position',i).attr('id', 'down' + i);
        var info1=$('<div>').addClass('info').text('MORE NEWS').attr('id', 'info' + i);
        $('.landing3').append(game1,game_menu,down1);
        $('#game_menu_m'+i).append(news1,vid1);
        $('#game_m'+i).append(weather1,score1,info1,down1);

        var home_team1 = $('<div>').attr('id', 'home_team' + i).addClass('score_board');
        var game_time1 = $('<div>').attr('id', 'game_time' + i).addClass('score_board');
        var away_team1 = $('<div>').attr('id', 'away_team' + i).addClass('score_board');
        $('#score_m'+i).append(away_team1,game_time1,home_team1)

    }
}
