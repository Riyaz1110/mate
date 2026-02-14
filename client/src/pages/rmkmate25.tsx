import { useState, useEffect, useRef } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import cover from "@/assets/25g1.jpg"

import gallery1 from "@/assets/25g1.jpg"
import gallery2 from "@/assets/25g2.jpg"
import gallery3 from "@/assets/25g3.jpg"

import yuchi from "@/assets/yuchi.mp4"
import sharon from "@/assets/sharon2.mp4"
import brenda from "@/assets/brendam.mp4"
import dong1 from "@/assets/dong-seog-final_mY6bWp0S.mp4"
import dong2 from "@/assets/dong.mp4"
import graham from "@/assets/graham2.mp4"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: any
  }
}

export default function RMKMATE25() {

  const images = [gallery1, gallery2, gallery3]
  const [current, setCurrent] = useState(0)

  const videoList = [
    { src: yuchi, title: "Dr. Yuchi – Artificial Intelligence" },
    { src: sharon, title: "Dr. Sharon – Future Communication Systems" },
    { src: brenda, title: "Dr. Brenda – Research Methodologies" },
    { src: dong1, title: "Dr. Dong Seog – Smart Systems" },
    { src: dong2, title: "Dr. Dong – IoT Applications" },
    { src: graham, title: "Dr. Graham – Industry 5.0 & Innovation" }
  ]

  const youtubeIds = [
    "lYbcKaUxMUw",
    "al4ndeSJ_CM",
    "XzIR5pgzX6A"
  ]

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const ytPlayers = useRef<any[]>([])

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause()
        video.currentTime = 0
      }
    })
  }

  const pauseOtherYouTube = (index: number) => {
    ytPlayers.current.forEach((player, i) => {
      if (player && i !== index) {
        player.pauseVideo()
      }
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      youtubeIds.forEach((id, index) => {
        ytPlayers.current[index] = new window.YT.Player(`youtube-${index}`, {
          videoId: id,
          events: {
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                pauseOtherYouTube(index)
              }
            }
          }
        })
      })
    }
  }, [])

  return (
    <div className="bg-slate-50 pt-24 pb-20">

      <section className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 text-white py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              RMKMATE’25
            </h1>

            <p className="text-xl opacity-90 mb-4">
              2025 IEEE International Conference on
            </p>

            <p className="text-2xl font-semibold leading-relaxed">
              Research Methodologies in Knowledge Management,
              Artificial Intelligence and Telecommunication Engineering
            </p>

            <p className="mt-6 text-lg font-medium">
              7<sup>th</sup> & 8<sup>th</sup> May, 2025
            </p>
          </div>

          <img
            src={cover}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Conference Highlights" />

        <div className="grid lg:grid-cols-3 gap-8">
          {youtubeIds.map((id, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div id={`youtube-${index}`} className="w-full h-[280px]" />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Keynote Speaker Videos" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition"
            >
              <video
                controls
                className="rounded-xl w-full"
                ref={(el) => (videoRefs.current[index] = el)}
                onPlay={() => handlePlay(index)}
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <p className="mt-4 text-center font-semibold text-gray-700">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Conference Gallery" />

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={() =>
              setCurrent((current + 1) % images.length)
            }
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
          >
            ❯
          </button>

        </div>
      </section>

    </div>
  )
}
