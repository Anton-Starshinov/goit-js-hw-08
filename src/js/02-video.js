import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeupdateTime, 1000));

function onTimeupdateTime(data) {
  const time = data.seconds;

  localStorage.setItem(STORAGE_KEY, time);
}
const saveTime = localStorage.getItem(STORAGE_KEY);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
