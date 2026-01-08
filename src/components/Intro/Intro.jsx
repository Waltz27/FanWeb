import  { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { videoPlaylists } from "../../data/videoPlaylists";
import SocialButtons from "../SocialButtons/SocialButtons";

gsap.registerPlugin(ScrollTrigger);


const Intro = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");
const fanArts = [
  "https://ik.imagekit.io/4bkho8jgt/fanart-1_xjPGd_YLiR.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-2_sVp8ohnXB.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-4_9I5OIwnzU.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-6_2KeEd59iR.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-3_UpRou5kb5.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-5_1do1ZDnAS.png",
  "https://ik.imagekit.io/4bkho8jgt/fanart-7_ZzUWHzg-Yt.png",
  "https://ik.imagekit.io/4bkho8jgt/%E3%81%AB%E3%81%92%E3%82%8B%EF%BD%9E%EF%BD%9E_jkt09SniB.png",
  "https://ik.imagekit.io/4bkho8jgt/2dc2b94a-6707-4995-aad4-739434c96bd6_j3YJovaN5.jpg",
];

const positions = [
  "position-1",
  "position-2",
  "position-3",
  "position-4",
  "position-5",
  "position-6",
  "position-7",
  "position-8",
  "position-9",
];

const randomFanArts = fanArts.map((img, index) => {
  return {
    img,
    pos: positions[index] 
  };
});

useEffect(() => {
  const playlistYears = Object.keys(videoPlaylists);
  const randomYear = playlistYears[Math.floor(Math.random() * playlistYears.length)];

  const videos = videoPlaylists[randomYear];
  const randomVideoId = videos[Math.floor(Math.random() * videos.length)];

  const thumbnail = `https://img.youtube.com/vi/${randomVideoId.id}/maxresdefault.jpg`; 
  // const thumbnail = `https://img.youtube.com/vi/-86SRRv08J0/maxresdefault.jpg`; 
  setThumbnailUrl(thumbnail);
}, []);


useEffect(() => {
  const body = document.body;
  
 
  if (!thumbnailUrl) return;

  gsap.killTweensOf([".rise", ".risingNote", ".thumbnailContainer", ".welcome-intro", ".social-bubbles-wrapper", ".menu-position"]);

  const timeline = gsap.timeline({
    defaults: { duration: 0.8 },
    onStart: () => body.classList.add("unscrollable")
  });

  timeline
    .to(".rise", { duration: 1, opacity: 1, ease: "ease.out" })
    .to(".risingNote", { duration: 2, opacity: 1, y: "-30vh", ease: "ease.out" },"<")
    .to(".rise", { duration: 1.5, y: "15vh",opacity: 0, ease: "ease.out" } )
    .to(".risingNote", {duration: 1.3, filter: "blur(50px)", ease: "power3.inOut"},"<")
    .add(() => {
      body.classList.remove("unscrollable");
    })
    .to(".thumbnailContainer", { opacity: 1, duration: 1, ease: "ease.inOut" })
    .to(".welcome-intro", { duration: 0.4, opacity: 1, ease: "ease.inOut", bottom: 0 })
    .to(".fan-art", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.8,
      ease: "power3.out",
      stagger: 0.15
    })
    .to(".fan-art", {
      opacity: 0,
      duration: 0.3,
      zIndex:0,
     ease: "ease.inOut",
    })
     .to(".floating-text", { opacity: 1, duration: 0.3, ease: "ease.inOut", stagger: 0.3 }, "-=0.2")
    .to(".infoContainer-text", { opacity: 1, duration: 1, ease: "ease.inOut", stagger: 0.2 }, "-=0.2")
    .to(".infoDescription", { opacity: 1, duration: 1.5, ease: "ease.inOut", stagger: 0.2 }, "-=1.2")
    .to(".social-bubble",{opacity: 1,y: 0,scale: 1,duration: 0.6,ease: "power3.out",stagger: 0.15,},"-=0.6")
    .to(".infoBounceCardBox", { opacity: 1, duration: 1.5, ease: "ease.inOut", stagger: 0.2 }, "-=1.2")
     .to(".infoImageBox", { opacity: 1, duration: 1.5, ease: "ease.inOut", stagger: 0.2 }, "-=1.2")
    .to(".menu-position", { opacity: 1, position: "fixed", duration: 0.4 })

  return () => {
    timeline.kill();
  };
}, [thumbnailUrl]); 

  useEffect(() => {
    if (!thumbnailUrl) return;
    setTimeout(() => {
      const elements = document.querySelectorAll(".floating-text");
      elements.forEach((el) => {
        const text = el.textContent;
        el.innerHTML = "";
        text.split("").forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          span.style.animationDelay = `${i * 0.1}s`;
          el.appendChild(span);
        });
      });
    }, 100);
  }, [thumbnailUrl]);

  return (
    <header id="Home" className="intro observe hidden bound">
      {thumbnailUrl && (
        <div
          className="thumbnailContainer"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <div className="welcome-intro">
             {randomFanArts.map((f, i) => (
                <img
                  key={i}
                  className={`fan-art ${f.pos}`}
                  src={f.img}
                  alt="fanart"
                  style={{ opacity: 0 }}
                />
              ))}
            <div className="infoContainer">
              <div className="infoTextContainer">
                <div className="infoHeaderBox">
                  <h1 className="mainText floating-text">寿海 浮</h1>
                  <h1 className="secondText floating-text">歌とポケモンV-Tuber</h1>
                </div>
                <div className="infoDescriptionBox">
                  <p className="infoDescription">見つけてくれてありがとう！</p>
                  <p className="infoDescription">
                    歌いながらポケモンをするバーチャル女、コトミ ウキです！！
                  </p>
                </div>
            <SocialButtons
              images={[
                "https://ik.imagekit.io/4bkho8jgt/x_F9vsMCecO.png?updatedAt=1761479547373",
                "https://ik.imagekit.io/4bkho8jgt/Youtube_logo_KIJM9rBwU.png?updatedAt=1761479421137",
                "https://ik.imagekit.io/4bkho8jgt/logo_SExFzH44G.png?updatedAt=1682306862703",
              ]}
              links={[
                "https://x.com/pu__kapuka",
                "https://www.youtube.com/@KotomiUki",
                "https://profcard.info/u/Ojt29bIE8HeF1xwg4y6xfCaCUjQ2",
              ]}
            />
              </div>
              <div className="infoImageBox"/>
            </div>
          </div>
        </div>
      )}

      <div className="Opening" style={{ position: "relative", zIndex: 2 }}>
        <div className="rising-uki">
          <img
            className="risingNote"
            src="https://ik.imagekit.io/4bkho8jgt/z7049192327386_c2726d6cc68a6b0938258fdcad3b5a55_U3nTXfYLx.jpg?updatedAt=1758794183805"
            alt="rise"
          />
        </div>
        <div className="rising-uki">
          <img
            className="rise"
            src="https://ik.imagekit.io/4bkho8jgt/singing_y_Zax8SmJ.png?updatedAt=1759835860407"
            alt="rise"
          />
        </div>
      </div>
    </header>
  );
};

export default Intro;
