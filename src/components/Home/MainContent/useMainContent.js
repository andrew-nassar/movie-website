import { useRef, useState } from "react";
import { VIDEO_DATA } from "../../../Data/VideoData";

export const useMainContent = (videoId) => {
  const film = VIDEO_DATA.find((v) => v.id === videoId);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
    try {
      setIsMuted(false);
      playerRef.current.unMute();
      playerRef.current.playVideo();
    } catch {
      /* ignore autoplay restrictions */
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted((prev) => !prev);
  };

  return { film, playerRef, isMuted, toggleMute, onReady };
};
