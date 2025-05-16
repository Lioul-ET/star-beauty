import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
} from "lucide-react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

// Helper function to generate optimized Cloudinary URLs
const getMediaUrls = (originalUrl) => {
  if (!originalUrl.includes("res.cloudinary.com"))
    return {
      original: originalUrl,
      gif: originalUrl,
      webm: originalUrl,
      mp4: originalUrl,
    };

  // Extract the public ID and extension from the URL
  const parts = originalUrl.split("/upload/");
  const uploadPart = parts[0] + "/upload/";
  const rest = parts[1];

  // Generate GIF placeholder (very low quality, very short loop, small size)
  const gifUrl = `${uploadPart}f_gif,du_0.5,eo_0.5,q_10,w_160/${rest.replace(
    /\.[^/.]+$/,
    ".gif"
  )}`;

  // Generate optimized video formats
  const webmUrl = `${uploadPart}f_webm,q_auto/${rest.replace(
    /\.[^/.]+$/,
    ".webm"
  )}`;
  const mp4Url = `${uploadPart}f_mp4,q_auto/${rest.replace(
    /\.[^/.]+$/,
    ".mp4"
  )}`;

  return {
    original: originalUrl,
    gif: gifUrl,
    webm: webmUrl,
    mp4: mp4Url,
  };
};

// Add a simple spinner component
const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
    <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </div>
);

const VideoCarousel = () => {
  const originalVideos = [
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747125036/Consulenza_Albania_surben.mov",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747125114/IMG_15370_oriwvk.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747125193/IMG_1536_ogvyvi.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747125027/IMG_15340_p9wmzc.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747121874/Segreto_del_sorriso_yurpq2.mov",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747388332/IMG_24750_k2qe4q.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747388426/IMG_24740_r0sqjj.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747388924/IMG_24750_nzc8qf.mp4",
    "https://res.cloudinary.com/dvtvlkpt1/video/upload/v1747388961/IMG_22430_unrivc.mp4",
  ];

  // Pre-process videos to get optimized URLs
  const videos = originalVideos.map((url) => getMediaUrls(url));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDialogOpen) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDialogOpen]);

  const getVisibleVideos = () => {
    if (isMobile) {
      return [{ url: videos[currentIndex], index: currentIndex }];
    }

    const visibleVideos = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videos.length;
      visibleVideos.push({ url: videos[index], index });
    }
    return visibleVideos;
  };

  const handleVideoClick = (url) => {
    setSelectedVideo(url);
    setIsDialogOpen(true);
    setIsPlaying(true);
  };

  const handleVideoLoad = (index) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }));
  };

  const CustomVideoPlayer = ({ url }) => {
    const videoRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const video = videoRef.current;

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }, []);

    const handleSeek = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
    };

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
      }
    };

    const toggleFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          if (containerRef.current.requestFullscreen) {
            await containerRef.current.requestFullscreen();
          } else if (containerRef.current.webkitRequestFullscreen) {
            await containerRef.current.webkitRequestFullscreen();
          } else if (containerRef.current.msRequestFullscreen) {
            await containerRef.current.msRequestFullscreen();
          }
          setIsFullscreen(true);
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            await document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            await document.msExitFullscreen();
          }
          setIsFullscreen(false);
        }
      } catch (error) {
        console.error("Fullscreen error:", error);
      }
    };

    useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.addEventListener("mozfullscreenchange", handleFullscreenChange);
      document.addEventListener("MSFullscreenChange", handleFullscreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "webkitfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "mozfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener(
          "MSFullscreenChange",
          handleFullscreenChange
        );
      };
    }, []);

    return (
      <div ref={containerRef} className="relative">
        {loading && <Spinner />}
        <video
          ref={videoRef}
          className="w-full max-h-[80vh] rounded-lg"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onCanPlayThrough={() => setLoading(false)}
        >
          {/* WebM format (better compression) */}
          <source src={url.webm} type="video/webm" />
          {/* MP4 fallback for Safari */}
          <source src={url.mp4} type="video/mp4" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div
            className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-blue-500 rounded-full relative group"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isPlaying ? (
                  <PauseCircle className="w-8 h-8" />
                ) : (
                  <PlayCircle className="w-8 h-8" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Maximize2 className="w-6 h-6" />
              </button>
            </div>

            <div className="text-white text-sm font-medium ml-auto">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 relative mt-24">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#c46255]">
          Vlogs
        </h1>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`flex justify-center items-center ${
            isMobile ? "" : "gap-4"
          }`}
        >
          {getVisibleVideos().map(({ url, index }) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative cursor-pointer group ${
                isMobile ? "w-full max-w-sm" : "w-full"
              }`}
              onClick={() => handleVideoClick(url)}
            >
              {/* Show GIF placeholder only */}
              <img
                src={url.gif}
                className="w-full aspect-[9/16] object-cover rounded-lg shadow-lg"
                alt="Video preview"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={previousSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <Dialog
            static
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-black rounded-xl shadow-2xl max-w-4xl w-full"
              >
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <CustomVideoPlayer url={selectedVideo} />
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoCarousel;
