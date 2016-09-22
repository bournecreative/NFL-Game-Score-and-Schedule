/**
 * Created by OF on 9/20/16.
 */

function ajaxYoutube(teams_names) {
    var id_array = [];

    var Data = {q: teams_names, maxResults: 50, type: 'video', detailLevel: 'verbose'};
    $.ajax({
        dataType: 'json',
        method: 'post',
        url: "http://s-apis.learningfuze.com/hackathon/youtube/search.php",
        data: Data,
        success: function (response) {
            console.log("Success call ajaxYoutube", response);
            var list_obj = response.data;
            console.log(list_obj);
            for (var i in response.data) {
                console.log(i);
                var obj_snippet = response.data[i].snippet.channelTitle;
                console.log(obj_snippet);
                if (obj_snippet != "NFL"){
                    id_array.push(i);
                }

            }
            console.log(id_array);
            var array_length = id_array.length;
            console.log(array_length);
            var random = Math.floor(Math.random() * array_length);
            console.log(random);
            var video_id = id_array[random];
            console.log(video_id);
            console.log('result', video_id);
            var url = 'https://www.youtube.com/embed/' + video_id;
         //   video_id = $('<video>').addClass("video").attr('src', url).css('width', "320", 'height', '240');
          //  $('body').append(video_id);
            var youVideo = $('iframe').attr('src', url);
            console.log(youVideo);

        }
    })
}
ajaxYoutube('philadelphia eagles');
