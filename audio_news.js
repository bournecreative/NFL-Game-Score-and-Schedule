/**
 * Created by OF on 9/21/16.
 */

var typeOfSong = "nfl"
var songArray = [];

/** Listen music using spotify API. */

function listenAjax() {
    console.log("running");
    //calls query with music as only criteria first
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: typeOfSong,
            type: 'track'
        },

        success: function (response) {
            console.log('spotify', response);

            for (i = 0; i < response.tracks.items.length; i++) {

                var tracks = response.tracks.items[i];

                var song = {
                    audio: tracks.preview_url
                };
                songArray.push(song);
                console.log(songArray[0]);
            }
            $('#audio').attr('src', songArray[0].audio);
            playPause();
        }

    });
}

/** Play or Pause music. */

function playPause() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        $('#playIcon').removeClass();
        $('#playIcon').addClass('glyphicon glyphicon-pause');

    } else {
        audio.pause();
        $('#playIcon').removeClass();
        $('#playIcon').addClass('glyphicon glyphicon-play');
    }
}
listenAjax();

// <div class="playDiv">
//     <audio controls loop hidden id="audio" src=""></audio>
//     <button id="playButton"><span id="playIcon" class="glyphicon glyphicon-play"></span></button>
//     </div>