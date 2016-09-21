/**
 * Created by OF on 9/20/16.
 */

function ajaxYoutube(teams_names) {
    var Data = {q: teams_names, maxResults: 15, type: 'video', detailLevel: 'low'};
    $.ajax({
        dataType: 'json',
        method: 'post',
        url: "http://s-apis.learningfuze.com/hackathon/youtube/search.php",
        data: Data,
        success: function (response) {
            console.log("Success call ajaxYoutube", response);
            var random = Math.floor((Math.random() * 14) + 1);
            console.log(random);
            var video_id = response.video[random].id;
            console.log('result', video_id);
            var url = 'https://www.youtube.com/embed/' + video_id;
            // video_id = $('<video>').addClass("video").attr('src', url).css('width', "320", 'height', '240');
            // $('body').append(video_id);
            var youVideo = $('iframe').attr('src', url);
            console.log(youVideo);

        }
    })
}
// ajaxYoutube('nfl colts');
