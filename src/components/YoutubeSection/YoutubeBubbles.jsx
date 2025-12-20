import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import { playlistData } from "../../data/videoPlaylists";

gsap.registerPlugin(ScrollTrigger);

const YoutubeBubbles = () => {
  const expandedRef = useRef(null);
  const [activePlaylist, setActivePlaylist] = useState(null);

  useLayoutEffect(() => {
    const bubbles = gsap.utils.toArray(".yt-bubble");
   const screenWidth = window.innerWidth;
    const maxX = screenWidth * 0.35; 
    const xSlots = [
      -maxX,
      -maxX * 0.6,
      -maxX * 0.3,
      maxX * 0.3,
      maxX * 0.6,
      maxX
    ];


    bubbles.forEach((bubble, i) => {
      gsap.set(bubble, {
        opacity: 0,
        x: xSlots[i % xSlots.length],
        y: "40vh",
      });
    });

    gsap.to(bubbles, {
      opacity: 1,
      y: () => gsap.utils.random(-20, -window.innerHeight * 0.25),
      duration: 5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Youtube",
        start: "top top",
        toggleActions: "play none",
      },
    });
  }, []);

  const expandBubble = (playlist) => {
    setActivePlaylist(playlist);

    requestAnimationFrame(() => {
      gsap.fromTo(
        expandedRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });
  };

  const closeExpanded = () => {
    gsap.to(expandedRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => setActivePlaylist(null),
    });
  };
  return (
    <>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
       
      >
        再生リスト
      </ScrollFloat>

      <div className="Youtube bound"  id="youtube" >
        {playlistData.map((playlist) => (
          <div
            className="yt-bubble"
            key={playlist.id}
            onClick={() => expandBubble(playlist)}
          >
            <span />
            <span />
          </div>
        ))}
              {activePlaylist && (
        <div className="yt-expanded" ref={expandedRef}>
          <button className="yt-close" onClick={closeExpanded}>
            ✕
          </button>

          <div className="yt-playlist-page">
           <aside className="yt-playlist-parent">
              <a
                href={activePlaylist.parent.playlistUrl}
                target="_blank"
              >
                <img
                  src={activePlaylist.parent.image}
                  alt={activePlaylist.parent.title}
                />
              </a>

              <h2>{activePlaylist.parent.title}</h2>
              <p className="yt-count">
                再生リスト・{activePlaylist.parent.videoCount} 本の動画
              </p>
            </aside>
          <section className="yt-playlist-children">
          {activePlaylist.children.map((video, i) => (
             <a
                href={activePlaylist.parent.playlistUrl}
                target="_blank"
              >
            <div
              className="yt-video-row"
              key={i}
            >
              <span className="yt-index">{i + 1}</span>
              <img src={video.image} alt={video.title} />
              <div className="yt-video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div></a>
          ))}
          <div className="yt-play-all-row">
            <a
                href={activePlaylist.parent.playlistUrl}
                target="_blank"
              >
                <button
              className="yt-play-all"
            >
              ▶ すべて再生
            </button>
              </a>
           
          </div>
        </section>

          </div>
        </div>
      )}
      </div>
     

    </>
  );
};

export default YoutubeBubbles;
