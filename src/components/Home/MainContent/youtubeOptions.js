export const getYouTubeOptions = (youtubeId) => ({
  playerVars: {
    autoplay: 1,
    loop: 1,
    controls: 0,
    modestbranding: 1,
    rel: 0,
    playlist: youtubeId,
    mute: 1,
    playsinline: 1,
  },
});
