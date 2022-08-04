const e=document.querySelector("#vimeo-player"),t=new Vimeo.Player(e);t.on("pause",(function(e){const t=e.seconds;console.log(t),localStorage.setItem("videoplayer-current-time",t)}));const o=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(o).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.9ff08683.js.map
