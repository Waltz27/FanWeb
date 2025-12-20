import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "../ScrollFloat/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

const TwitterCard = () => {
  const expandCardRef = useRef(null);
  const [currentProfile, setCurrentProfile] = useState(0);
  const twitterContentRef = useRef(null);
  const profiles = [
    {
      name: "🧼寿海 浮🧼",
      handle: "@pu__kapuka",
      wallpaper: "https://ik.imagekit.io/4bkho8jgt/1500x500_tJrUaKfUJ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1669952757064",
      pfpClass: "twitter-pfp",
      bio: "#IRIAM で配信中の @kiwiliver 所属Vライバー！🧼ママ @0th_INwords 🧼ヘッダー @owapikopiko 🧼サブ @UkiUki_no_Uki 🐟溺クン @obore_te_iku 🧼FA #ウキ世絵（活動に使用することがあります）",
      joinDate: "2020年8月からTwitterを利用しています",
      link: "https://twitter.com/pu__kapuka"
    },
    {
      name: "🧼ウキちゃん🧼",
      handle: "@UkiUki_no_Uki",
      wallpaper: "https://ik.imagekit.io/4bkho8jgt/kotomi_uki_2_vD9ky5VDS.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1668475505523",
      pfpClass: "twitter-pfp-two",
      bio: "脈絡がない！主に体調不良ツイートと作業進捗",
      joinDate: "2021年9月からTwitterを利用しています",
      link: "https://twitter.com/u___kiuki"
    }
  ];

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev - 1 + profiles.length) % profiles.length);
  };
const animateTwitterContent = () => {
  const content = twitterContentRef.current;
  if (!content) return;

  const tl = gsap.timeline();

  tl.to(".twitter-wallpaper-one", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.08,
  }, "-=0.4")
  .to(".twitter-navigation", {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.4")
  // Pre-bio
  .to(".twitter-pre-bio", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.4")
  // Bio
  .to(".twitter-bio", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.45")
  // Tabs
  .to(".twitter-tabs-one", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }, "-=0.4");

  return tl;
};


useEffect(() => {
  const expandCard = expandCardRef.current;

  if (!expandCard) return;

  ScrollTrigger.create({
    trigger: ".ttExpand",
    start: "center center",
    onEnter: () => {
      expandCard.classList.add("expand");
      setTimeout(() => {
        animateTwitterContent();
      }, 350);
    },
  });
}, []);



  useEffect(() => {
    if (expandCardRef.current?.classList.contains("expand")) {
      animateTwitterContent();
    }
  }, [currentProfile]);

  const profile = profiles[currentProfile];

  return (
    <><ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        
      >
       ツイッター
      </ScrollFloat>
       <div className="twitter bound observe hidden" id="twitter" >
      <div className="TwitterCard ttExpand expand" ref={expandCardRef}>
        <div className="twitter-content" ref={twitterContentRef}>
          <div className="twitter-navigation">
            <button className="twitter-nav-arrow" onClick={prevProfile}>
              <img src="https://ik.imagekit.io/4bkho8jgt/leftArrow_BsvXwlH15.svg?updatedAt=1759111892245" alt="Previous Profile" />
            </button>
           
            <button className="twitter-nav-arrow" onClick={nextProfile}>
              <img src="https://ik.imagekit.io/4bkho8jgt/rightArrow_h8y6HgK4H.svg?updatedAt=1759111892254" alt="Next Profile" />
            </button>
           
          </div>
          <img
            className="twitter-wallpaper-one"
            src={profile.wallpaper}
            alt=""
          />
          <div className="twitter-bio">
            <div className="twitter-pre-bio">
              <div className={profile.pfpClass}></div>
              <div className="twitter-btn">
                <a
                  className="twitter-a"
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ツイッターリンク
                </a>
              </div>
            </div>
            <div>
              <div className="twitter-header">{profile.name}</div>
              <div className="twitter-subtext">{profile.handle}</div>
            </div>
            <div>{profile.bio}</div>
            <div>
              <span className="twitter-secondary">{profile.joinDate}</span>
            </div>
            <div>
              *** <span className="twitter-secondary">フォロー中</span> ***
              <span className="twitter-secondary">フォロワー</span>
            </div>
          </div>
          <div className="twitter-tabs-one">
            <div className="twitter-a">
              <a
                className="twitter-a"
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                ツイート
              </a>
            </div>
            <div>
              <a
                className="twitter-a"
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                ツイートと返信
              </a>
            </div>
            <div>
              <a
                className="twitter-a"
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                メディア
              </a>
            </div>
            <div>
              <a
                className="twitter-a"
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                いいね
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
   
  );
};

export default TwitterCard;