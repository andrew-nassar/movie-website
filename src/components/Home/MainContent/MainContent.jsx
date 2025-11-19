import React, { useState } from "react";
import YouTube from "react-youtube";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { useMainContent } from "./useMainContent";
import { getYouTubeOptions } from "./youtubeOptions";
import IconGridTailwind from "../icon_gird_tailwind/IconGridTailwind";
import { VIDEO_DATA } from "../../../Data/VideoData";

const MainContent = ({ video_data }) => {
  const { isMuted, toggleMute, onReady } = useMainContent(video_data);

  // ✅ Set initial video
  const initialVideo = video_data || VIDEO_DATA[1];
  const [selectedVideo, setSelectedVideo] = useState(initialVideo);

  const handleVideoChange = (newVideo) => {
    setSelectedVideo(newVideo);
  };

  if (!selectedVideo) {
    return (
      <main className="flex items-center justify-center h-screen bg-gray-950 text-white">
        <p>⚠️ الفيديو غير موجود</p>
      </main>
    );
  }

  const opts = getYouTubeOptions(selectedVideo.youtubeId);

  return (
    <main
      className="relative overflow-hidden bg-gray-950 min-h-screen"
      dir="rtl"
    >
      {/* 🎬 Hero Video Section */}
      <section className="relative h-[88vh] flex items-end pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-full h-full transform -translate-x-1/2 -translate-y-1/2">
            <YouTube
              videoId={selectedVideo.youtubeId}
              opts={opts}
              onReady={onReady}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 w-full px-8 md:px-12 text-white text-right -mt-8">
          <h1
            className="
              text-4xl md:text-6xl 
              font-extrabold 
              mb-4 
              leading-tight 
              text-white 
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] 
              tracking-wide
            "
          >
            {selectedVideo.title}
            <br />
            <span className="text-gray-300 text-3xl md:text-5xl font-semibold">
              {selectedVideo.subtitle}
            </span>
          </h1>

          <p className="text-lg text-gray-200 mb-4 max-w-xl">
            {selectedVideo.category}
          </p>
          <p className="text-base text-gray-300 mb-8 max-w-lg">
            {selectedVideo.description}
          </p>

          {/* Buttons */}
          <div className="flex justify-start space-x-4 rtl:space-x-reverse mb-8">
            <button className="flex items-center space-x-2 rtl:space-x-reverse bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-xl">
              <span>شاهد و حمّل الآن</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <button className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-700 bg-opacity-70 hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              <span>+ أضف لقائمتي</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>

          {/* 🔊 Mute Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "تشغيل الصوت" : "إيقاف الصوت"}
            className="absolute top-10 left-6 z-30 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white text-2xl p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
          >
            {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
          </button>
        </div>
      </section>

      {/* 🚀 ICON GRID BELOW */}
      <div
        className="
          absolute
          bottom-[-40px]
          left-1/2
          -translate-x-1/2
          w-full
          z-[10]
          backdrop-blur-md
          bg-black/40
          rounded-t-2xl
          transition-all
          duration-500
        "
      >
        <IconGridTailwind onVideoSelect={handleVideoChange} />
      </div>
    </main>
  );
};

export default MainContent;
