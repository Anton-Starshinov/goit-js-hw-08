!function(){const e=document.querySelector("#vimeo-player"),o=new Vimeo.Player(e),t="videoplayer-current-time";o.on("pause",(function(e){const o=e.seconds;console.log(o),localStorage.setItem(t,o)}));const n=localStorage.getItem(t);o.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.1dbf0749.js.map
