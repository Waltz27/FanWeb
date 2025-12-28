import React, { useEffect } from "react";
import Intro from "../components/Intro/Intro";
import Menu from "../components/Menu/Menu";
import TwitterCard from "../components/TwitterCard/TwitterCard";
import Footer from "../components/Footer/Footer";
import HorizontalGallery from "../components/Gallery/horizontal-gallery";
import ClickSpark from "../components/ClickSpark";
import YoutubeBubbles from "../components/YoutubeSection/YoutubeBubbles";
import InfoSection from "../components/InfoSection/InfoSecion";
import BirthdayDrop from "../components/PresentBox/PresentBox";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hidden");
          }
        });
      },
      {
        threshold: 0.2, // 20% visible triggers show
      }
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bound" style={{ height: "100vh", width: "100%" }}>
      <ClickSpark
        sparkColor="#7b667f"
        sparkSize={2}
        sparkRadius={20}
        sparkCount={50}
        duration={300}
        easing="ease-out"
        extraScale={1}
      >
        <div className="homeContent" id="Home">
          <Intro />
          <Menu />
          <InfoSection />
          <YoutubeBubbles/>
          <TwitterCard />
          <HorizontalGallery />
          <BirthdayDrop />
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Home;
