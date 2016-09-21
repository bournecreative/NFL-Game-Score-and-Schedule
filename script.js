var up_down_flag="down";
var number_of_games = 16;

$(document).ready( function (){
    generate_schedule_d();
    generate_schedule_m();
    click_handlers();
    set_date();
});
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
        if (i % 2 == 0) {
            var game1 = $('<div>').attr('id', 'game' + i).addClass('game_box');
            var score1 = $('<div>').attr('id', 'score' + i).addClass('score');
            var vid1 = $('<div>').attr('id', 'vid' + i).addClass('video').text('video stuffs here');
            var news1 = $('<div>').attr('id', 'news' + i).addClass('news').text('twitter stuffs');
            var weather1 = $('<div>').attr('id', 'weather' + i).addClass('weather').text('weather stuffs');
            var game_menu = $('<div>').attr('id', 'game_menu' + i).addClass('game_menu');
            var down1 = $('<div>').addClass('down').data('position',i).attr('id', 'down' + i);
            var info1=$('<div>').addClass('info').text('MORE NEWS').attr('id', 'info' + i);
            $('.landing1').append(game1,game_menu,down1);
            $('#game_menu'+i).append(news1,vid1);
            $('#game'+i).append(weather1,score1,info1,down1);

            var home_team1 = $('<div>').attr('id', 'home_team' + i).addClass('col-sm-3 score_board').text('home team');
            var game_time1 = $('<div>').attr('id', 'game_time' + i).addClass('col-sm-3 score_board').text('time');
            var away_team1 = $('<div>').attr('id', 'away_team' + i).addClass('col-sm-3 score_board').text('away team');
            $('#score'+i).append(home_team1,game_time1,away_team1)
        }
        else {
            var game2 = $('<div>').attr('id', 'game' + i).addClass('game_box');
            var score2 = $('<div>').attr('id', 'score' + i).addClass('score');
            var vid2 = $('<div>').attr('id', 'vid' + i).addClass('video').text('video stuffs here');
            var news2 = $('<div>').attr('id', 'news' + i).addClass('news').text('twitter stuffs');
            var weather2 = $('<div>').attr('id', 'weather' + i).addClass('weather').text('weather stuffs');
            var game_menu = $('<div>').attr('id', 'game_menu' + i).addClass('game_menu');
            var down2 = $('<div>').addClass('down').data('position',i).attr('id', 'down' + i);;
            var info2=$('<div>').addClass('info').text('MORE NEWS').attr('id', 'info' + i)
            $('.landing2').append(game2,game_menu);
            $('#game_menu'+i).append(news2,vid2);
            $('#game'+i).append(weather2,score2, info2,down2);

            var home_team1 = $('<div>').attr('id', 'home_team' + i).addClass('col-sm-3 score_board');
            var game_time1 = $('<div>').attr('id', 'game_time' + i).addClass('col-sm-3 score_board');
            var away_team1 = $('<div>').attr('id', 'away_team' + i).addClass('col-sm-3 score_board');
            $('#score'+i).append(home_team1,game_time1,away_team1)
        }
    }
}
function generate_schedule_m() {
    var number_of_games = 16;
    for (i = 0; i < number_of_games; i++) {
        var game1 = $('<div>').attr('id', 'game_m' + i).addClass('game_box');
        var score1 = $('<div>').attr('id', 'score' + i).addClass('score').text('scores&schedule');
        var vid1 = $('<div>').attr('id', 'vid' + i).addClass('video').text('video stuffs here');
        var news1 = $('<div>').attr('id', 'news' + i).addClass('news').text('twitter stuffs');
        var weather1 = $('<div>').attr('id', 'weather' + i).addClass('weather').text('weather stuffs');
        var game_menu = $('<div>').attr('id', 'game_menu_m' + i).addClass('game_menu');
        var down1 = $('<div>').addClass('down').data('position',i).attr('id', 'down' + i);
        var info1=$('<div>').addClass('info').text('MORE NEWS').attr('id', 'info' + i);
        $('.landing3').append(game1,game_menu,down1);
        $('#game_menu_m'+i).append(news1,vid1);
        $('#game_m'+i).append(weather1,score1,info1,down1);
    }
}