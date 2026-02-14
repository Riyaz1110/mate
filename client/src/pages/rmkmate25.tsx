import { useState, useEffect } from "react"
import { SectionHeader } from "@/components/SectionHeader"

import cover from "@/assets/25g1.jpg"

import gallery1 from "@/assets/25g1.jpg"
import gallery2 from "@/assets/25g2.jpg"
import gallery3 from "@/assets/25g3.jpg"

import yuchi from "@/assets/25g1.jpg"
import sharon from "@/assets/25g1.jpg"
import brenda from "@/assets/25g1.jpg"
import dong1 from "@/assets/25g1.jpg"
import dong2 from "@/assets/25g1.jpg"
import graham from "@/assets/25g1.jpg"

export default function RMKMATE25() {

  const images = [gallery1, gallery2, gallery3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-50 pt-24 pb-20">

      {/* ================= HERO SECTION ================= */}
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


      {/* ================= ABOUT CONFERENCE ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="About the Conference" />

        <div className="bg-white rounded-3xl shadow-xl p-10 text-gray-700 leading-relaxed">
          RMKMATE’25 brings together global researchers,
          academicians, and industry professionals to explore
          emerging trends in Artificial Intelligence,
          Knowledge Management, and Telecommunication Engineering.

          <ul className="mt-6 grid md:grid-cols-2 gap-3 list-disc list-inside">
            <li>Artificial Intelligence & Deep Learning</li>
            <li>Knowledge Discovery & Data Mining</li>
            <li>Natural Language Processing</li>
            <li>IoT & Edge Computing</li>
            <li>5G / 6G Communication Systems</li>
            <li>Cyber Physical Systems</li>
            <li>Quantum Computing</li>
            <li>Information Security</li>
          </ul>
        </div>
      </section>


      {/* ================= YOUTUBE HIGHLIGHTS ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Conference Highlights" />

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            "https://www.youtube.com/embed/lYbcKaUxMUw",
            "https://www.youtube.com/embed/al4ndeSJ_CM",
            "https://www.youtube.com/embed/XzIR5pgzX6A"
          ].map((video, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <iframe
                className="w-full h-[280px]"
                src={video}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>


      {/* ================= KEYNOTE VIDEOS ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Keynote Speaker Videos" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[yuchi, sharon, brenda, dong1, dong2, graham].map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition"
            >
              <video controls className="rounded-xl w-full">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>
      </section>


      {/* ================= GALLERY SLIDER ================= */}
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

          {/* Left */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
          >
            ❮
          </button>

          {/* Right */}
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
