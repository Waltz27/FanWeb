import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./InfoSection.css";

export default function InfoSection() {
  return (
    <>
    <ScrollFloat
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.03}
    >
    自己紹介
    </ScrollFloat>
    <div className="info-section bound observe hidden" id="Info">
        <div className="info-row"> 
            <div className="info-text">
            <div className="text-version v1">
                <h1>私の趣味～</h1>
                <p>熱心なポケモンファンとして、ランポケモンゲームを楽しんでいます。 </p>
                <p> YouTubeでポケモンZAの配信をたくさんやっていて、</p>
                <p> SVもよくプレイしています。</p>
            </div>

            <div className="text-version v2">
                <h1>私の趣味～</h1>
                <p>それ以外にも、元々面白い動画も用意しているです！</p>
                <p> ぜひチェックしてみてね～</p>
                <p> Come And Watch My Stream～～!</p>
            </div>
            </div>
            <div className="info-image">
            <a href="https://www.youtube.com/@KotomiUki/featured" target="_blank">
            <img
                className="img-version v1"
                src="https://ik.imagekit.io/4bkho8jgt/thumbnail_lH1rJI9J5.jpg"
                alt="Version 1"
            />
            <img
                className="img-version v2"
                src="https://ik.imagekit.io/4bkho8jgt/thumbnail%20ver-2_jVWb4RR5B.jpg"
                alt="Version 2"
            />
            </a>
            </div>
        </div>
        <div className="info-row reverse">
            <div className="info-text">
            <div className="text-version v1">
                <h1>チャンネルイベント</h1>
                <p>時々、ファンイベントやグッズ販売もあります～</p>
                <li>ポケモン交換</li>
                <li>レイドイベント</li>
                <li>ゲームイベント～</li>
            
            </div>

            <div className="text-version v2">
                <h2>新規参加者を歓迎します</h2>
                <p>ポケモンを愛し、音楽を聴き、友好的なコミュニティを求める方々～</p>
                <p>ぜひ参加してね！</p>
            </div>
            </div>

            <div className="info-image">
            <a href="https://www.youtube.com/@KotomiUki/featured" target="_blank">
            <img
                className="img-version v1"
                src="https://ik.imagekit.io/4bkho8jgt/thumbnail-2_iNKq7birE.jpg"
                alt="Version 1"
            />
            <img
                className="img-version v2"
                src="https://ik.imagekit.io/4bkho8jgt/thumbnail-2%20ver-2_YX0Txvgop.jpg"
                alt="Version 2"
            />
            </a>
            </div>
        </div>
    </div>
    </>
  );
}
