import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentvideo = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
    localStorage.setItem(currentvideo, JSON.stringify(currentTime.seconds));
};

player.on('timeupdate', throttle(getCurrentTime,1000));

const CurrentTime = localStorage.getItem(currentvideo);
player.CurrentTime(JSON.parse(CurrentTime) || 0);
