import { SectionHeader } from "@/components/SectionHeader"
import brochureCover from "@/assets/RMKMATE23.jpeg"
import collage from "@/assets/rmk1.png"
import gallery1 from "@/assets/23g1.jpeg"
import gallery2 from "@/assets/23g2.jpeg"
import gallery3 from "@/assets/v2.png"
import { useState, useEffect } from "react"

export default function RMKMATE23() {
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
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              RMKMATE’23
            </h1>
            <p className="text-lg opacity-90 mb-4">
              2023 IEEE International Conference on
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              Research Methodologies in Knowledge Management,
              Artificial Intelligence and Telecommunication Engineering
            </p>
            <p className="mt-6 text-lg font-medium">
              01<sup>st</sup> & 02<sup>nd</sup> November, 2023
            </p>
          </div>

          <img
            src={brochureCover}
            alt="RMKMATE23 Brochure"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>


      {/* ================= YOUTUBE SECTION ================= */}
      <section className="container mx-auto px-6 mt-20">
        <SectionHeader
          title="Conference Highlights"
          subtitle="Watch RMKMATE’23 Event Overview"
        />

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/1oQ4z4LOcBs"
            title="RMKMATE23 Conference"
            allowFullScreen
          />
        </div>
      </section>


      {/* ================= ABOUT COLLEGE ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="About R.M.K Engineering College" />

        <div className="bg-white rounded-3xl shadow-lg p-10 leading-relaxed text-gray-700">
          <p>
            R.M.K Engineering College, established in 1995, has consistently
            achieved academic excellence. The institution ranks among the top
            engineering colleges affiliated to Anna University and has
            maintained an excellent placement record.
          </p>

          <p className="mt-4">
            Accredited by NAAC with A+ Grade and NBA, the college has received
            recognition under ARIIA ranking and has established multiple
            Centres of Excellence in Artificial Intelligence, IoT, Cloud
            Computing, Robotics, Cyber Security and Data Science.
          </p>
        </div>
      </section>


      {/* ================= ABOUT DEPARTMENT ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Department of Computer Science & Engineering" />

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-3xl p-10 shadow-xl">
          <p>
            The Department of Computer Science and Engineering was established
            in 1997 and has grown significantly with strong research
            collaborations and industry partnerships including TCS, NTT Data,
            and ATOS.
          </p>

          <p className="mt-4">
            The department offers undergraduate and postgraduate programs and
            has been recognized as a Research Centre by Anna University.
          </p>
        </div>
      </section>


      {/* ================= ABOUT CONFERENCE ================= */}
      <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="About the Conference" />

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <p className="text-gray-700 leading-relaxed">
            RMKMATE’23 is an annual international conference bringing together
            researchers, scholars, and professionals worldwide to discuss
            advancements in Knowledge Management, Artificial Intelligence,
            and Telecommunication Engineering.
          </p>

          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
            <li>Knowledge discovery & management</li>
            <li>Information retrieval and analysis</li>
            <li>Data mining & Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Artificial Intelligence</li>
            <li>Wireless & Mobile Communications</li>
            <li>Augmented Reality / Virtual Reality</li>
            <li>Internet of Things (IoT)</li>
          </ul>
        </div>
      </section>


      {/* ================= GALLERY SECTION ================= */}
<section className="container mx-auto px-6 mt-24">
  <SectionHeader title="Conference Gallery" />

  <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">

    {/* Slides */}
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full flex-shrink-0 object-cover"
        />
      ))}
    </div>

    {/* Left Button */}
    <button
      onClick={() =>
        setCurrent((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        )
      }
      className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
    >
      ❮
    </button>

    {/* Right Button */}
    <button
      onClick={() =>
        setCurrent((prev) => (prev + 1) % images.length)
      }
      className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
    >
      ❯
    </button>

    {/* Dots */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {images.map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            current === index ? "bg-white" : "bg-white/50"
          }`}
        />
      ))}
    </div>

  </div>
</section>



      {/* ================= REGISTRATION ================= */}
      {/* <section className="container mx-auto px-6 mt-24">
        <SectionHeader title="Registration Details" />

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Indian Delegates</h3>
            <p>IEEE Member: ₹6000</p>
            <p>Non-IEEE Member: ₹7000</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Foreign Delegates</h3>
            <p>IEEE Member: $125</p>
            <p>Non-IEEE Member: $150</p>
          </div>
        </div>
      </section> */}

    </div>
  )
}
