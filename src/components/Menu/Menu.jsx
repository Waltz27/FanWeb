import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Menu = () => {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".toggle");
    const colorBt = document.querySelector(".color");
    const list = document.querySelectorAll("li");
   

    Draggable.create("#drag", { bounds: ".bound" });

    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));

    menuToggle.onclick = () => {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active");
      colorBt.classList.toggle("show");
    };
  }, []);

  return (
    <div className="menu-position">
      <ul className="menu" id="drag">
        <div className="toggle">
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <li style={{ "--i": 1 }} className="active">
          <a href="#Home">
            <ion-icon name="home-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#Info">
            <ion-icon name="information-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 4 }}>
           <a href="#youtube">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
          
        </li>
        <li style={{ "--i": 5 }}>
        <a href="#gallery">
          <ion-icon name="images-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 6 }}>
           <a
            href="https://marshmallow-qa.com/pu__kapuka"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://ik.imagekit.io/4bkho8jgt/mashmallow_ETWmV0L0S.png" />
          </a>
        </li>
       
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Menu;
