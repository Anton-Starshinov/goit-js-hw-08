const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('pause', function (data) {
  const time = data.seconds;

  console.log(time);
  localStorage.setItem(STORAGE_KEY, time);
});

const saveTime = localStorage.getItem(STORAGE_KEY);
player
  .setCurrentTime(saveTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
