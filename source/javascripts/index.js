import 'script!jquery'
import 'script!jquery.scrollto'
import 'script!lodash'
import 'foundation-sites'
import 'soundcloud'
$(document).foundation();

var debounced = _.debounce(
  function(){
     $('.top-bar-right').scrollTo($('a.active'), 100);
  }, 100
)
$(window).scroll(debounced)

SC.initialize({
    client_id: '3d3c856d15d614464fc6eaab581a85ea'
});
var playing = true;
var playerButton = $('.musicplayer');
var volume = 1;
SC.stream('/tracks/52693751').then(function(player){
    player.play();
    player.setVolume(0);
    var makeLouder = function() {
        player.setVolume((volume++)/100);
        if (volume < 100) {
            setTimeout(makeLouder, 150);
        }
    };
    makeLouder();

    playerButton.on('click', function(e) {
        if (playing) {
            player.pause();
            playerButton.removeClass('playing');
            playerButton.find('i').removeClass('fa-pause-circle').addClass('fa-play-circle');
            playing = false;
        } else {
            player.play();
            playerButton.addClass('playing');
            playerButton.find('i').removeClass('fa-play-circle').addClass('fa-pause-circle');
            playing = true;
        }
    });
});

