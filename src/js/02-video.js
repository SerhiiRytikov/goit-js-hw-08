import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);
const result = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(Number(result)).then(function (seconds) {
  // seconds = the actual time that the player seeked to
});
