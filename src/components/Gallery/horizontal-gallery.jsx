"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./horizontal-gallery.css"
import ScrollFloat from "../ScrollFloat/ScrollFloat"
import { videoPlaylists } from "../../data/videoPlaylists"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HorizontalGallery({ className = "" }) {
  const containerRef = useRef(null)
  const galleryRef = useRef(null)
  const [allVideos, setAllVideos] = useState({})
  const [currentYearIndex, setCurrentYearIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Use videoPlaylists keys for years
  const years = Object.keys(videoPlaylists).sort((a, b) => b - a)
  const currentYear = years[currentYearIndex]

  // Populate allVideos from videoPlaylists (static)
  useEffect(() => {
    const formatted = {}

   Object.entries(videoPlaylists).forEach(([year, videos]) => {
  formatted[year] = videos.slice(0, 7).map((video) => ({
    videoId: video.id,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    viewCount: video.views,
  }))
})


    setAllVideos(formatted)
    setIsLoading(false)
  }, [])

  // GSAP horizontal scroll
  useEffect(() => {
    const section = containerRef.current
    const gallery = galleryRef.current
    if (!section || !gallery || !allVideos[currentYear]) return

    const videos = allVideos[currentYear]
    if (videos.length === 0) return

    const galleryWidth = gallery.scrollWidth
    const sectionWidth = section.offsetWidth
    const scrollDistance = galleryWidth - sectionWidth
    if (scrollDistance <= 0) return

    const ctx = gsap.context(() => {
      gsap.to(gallery, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + scrollDistance,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
          onUpdate: (self) => setIsExpanded(self.progress > 0),
        },
      })
    }, section)

    return () => ctx.revert()
  }, [currentYear, allVideos])

  const goToPreviousYear = () => {
    setCurrentYearIndex((prev) => (prev > 0 ? prev - 1 : years.length - 1))
  }

  const goToNextYear = () => {
    setCurrentYearIndex((prev) => (prev < years.length - 1 ? prev + 1 : 0))
  }

  const classes = ["one", "two", "three", "four", "five", "six", "seven"]
  const currentVideos = (allVideos[currentYear] || []).slice(0, 7)

  if (isLoading) {
    return (
      <div className={`horizontal-gallery-container ${className}`}>
        <div className="loading-state">Loading galleries...</div>
      </div>
    )
  }

  return (
    <div className="galleryContainer">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        カバー画像ギャラリー
      </ScrollFloat>
      <div id="gallery" className={`horizontal-gallery-container ${className} expanded `}>
        <div className={`year-navigation ${isExpanded ? "hidden" : "visible"}`}>
          <button className="nav-arrow" onClick={goToPreviousYear}>
            <img
              src="https://ik.imagekit.io/4bkho8jgt/leftArrow_BsvXwlH15.svg?updatedAt=1759111892245"
              alt="Previous Year"
            />
          </button>
          <div className="current-year">{currentYear}</div>
          <button className="nav-arrow" onClick={goToNextYear}>
            <img
              src="https://ik.imagekit.io/4bkho8jgt/rightArrow_h8y6HgK4H.svg?updatedAt=1759111892254"
              alt="Next Year"
            />
          </button>
        </div>

        <div ref={containerRef} className="gallery-wrapper expanded">
          <div ref={galleryRef} className="gallery-track">
            {currentVideos.map((video, index) => {
              const randomClass = classes[Math.floor(Math.random() * classes.length)]

              let viewColor = ""
              if (video.viewCount >= 10000) viewColor = "gold-border"
              else if (video.viewCount >= 5000) viewColor = "green-border"
              else if (video.viewCount >= 1000) viewColor = "red-border"

              return (
                <div key={`${currentYear}-${index}`} className={`video-thumbnail ${randomClass} ${viewColor}`}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-link"
                  >
                    <img
                      src={video.thumbnailUrl || "/placeholder.svg"}
                      alt={`Video Thumbnail ${index + 1}`}
                      className="horizontal-image"
                      loading="lazy"
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
