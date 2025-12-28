import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PresentBox.css";
import ScrollFloat from "../ScrollFloat/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);

export default function BirthdayDrop() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const lidRef = useRef(null);
  const fallTl = useRef(null);
  const openTl = useRef(null);

  const [opened, setOpened] = useState(false);

  const birthdayImages = [
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /** FALLING BOX TIMELINE **/
      fallTl.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play reverse play reverse",
          onEnter: () =>
            gsap.to(document.documentElement, {
              backgroundColor: "#7b667f",
              duration: 0.6
            }),
          onLeaveBack: () => {
            // Reset open animation
            openTl.current?.reverse();
            setOpened(false);

            gsap.to(document.documentElement, {
              backgroundColor: "#7b667f",
              duration: 0.6
            });
          }
        }
      });

      fallTl.current.fromTo(
        boxRef.current,
        { y: "-120vh", opacity: 0 },
        { y: "60vh", opacity: 1, duration: 1.2, ease: "bounce.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
useLayoutEffect(() => {
  if (!opened) return;

  const frames = gsap.utils.toArray(".floating-frame");

  // Kill any previous tweens
  gsap.killTweensOf(frames);

  // Entrance timeline (STAGGER)
  const appearTl = gsap.timeline();

  appearTl.fromTo(
    frames,
    {
      opacity: 0,
      scale: 0.85,
      y: () => gsap.utils.random(40, 120),
      rotation: () => gsap.utils.random(-8, 8)
    },
    {
      opacity: 1,
      scale: 1,
      y: () => gsap.utils.random(-120, 80),
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.12 
    }
  );

 
  appearTl.add(() => {
    frames.forEach((frame) => {
      gsap.to(frame, {
        y: "+=20",
        duration: gsap.utils.random(2.5, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  });

  return () => {
    gsap.killTweensOf(frames);
  };
}, [opened]);



  const openBox = () => {
    if (opened) return;
    setOpened(true);

    openTl.current = gsap.timeline();

    openTl.current
      .to(lidRef.current, {
        y: -80,
        rotation: -15,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(
        boxRef.current,
        {
          opacity: 0,
          duration: 0.3,
          pointerEvents: "none"
        },
        "+=0.1"
      );
  };

  return (
    <section className="birthday-section" ref={sectionRef}>
      <div className="present-box" ref={boxRef} onClick={openBox}>
        <div className="present-lid" ref={lidRef}>
          <div className="ribbon ribbon-horizontal" />
        </div>

        <div className="present-body">
          <div className="ribbon ribbon-vertical" />
        </div>
      </div>

      {opened && (
        <div className="birthday-content">
            <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="birthday-text"
        
      >
       Uki-chan ! Happy Birthday！！！
      </ScrollFloat>   
         <div className="image-area">
        {birthdayImages.map((src, index) => (
            <div className="floating-frame" key={index}>
            <img src={src} alt={`Birthday image ${index + 1}`} />
            </div>
        ))}
        </div>

        </div>
      )}
    </section>
  );
}
