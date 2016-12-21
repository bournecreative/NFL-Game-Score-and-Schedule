/**
 * Created by OF on 9/21/16.
 */
function ajaxYoutube(teams_names) {
    var Data = {q: teams_names, maxResults: 15, type: 'video', detailLevel: 'verbose'};
    $.ajax({
        dataType: 'json',
        method: 'post',
        url: "http://api.espn.com/v1/audio/stations/4359221",
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

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
//     <script src="youtubeApi.js"></script>