/**
 * Created by OF on 9/20/16.
 */
var video_id = null;
function ajaxYoutube(teams_names) {
    var Data = {q: teams_names, maxResults: 1, type: 'video', detailLevel: 'low'};
    $.ajax({
        dataType: 'json',
        method: 'post',
        url: "http://s-apis.learningfuze.com/hackathon/youtube/search.php",
        data: Data,
        success: function (response) {
            console.log("Success call ajaxYoutube");
            video_id = response.video[0].id;
            console.log('result', video_id);
            var url = 'https://www.youtube.com/embed/' + video_id;
            // flickrImage = $('<img>').attr('src', url).css("margin-top", "10%");
            // $('#optionDiv'+divNum).append(flickrImage);
            var youVideo = $('iframe').attr('src', url);
            console.log(youVideo);

        }
    })
}


ajaxYoutube('eagles');
