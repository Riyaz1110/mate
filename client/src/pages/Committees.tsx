import { useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

import chief from "@/assets/cheif.png"
import manjula from "@/assets/manjula.png"
import jothi from "@/assets/jothi.png"
import kishore from "@/assets/kishore.png"
import junaid from "@/assets/junaid.png"
import elwin from "@/assets/elwin.png"
import yalamanchi from "@/assets/yalamanchi.png"
import durgadevi from "@/assets/durgadevi.png"
import sowmya from "@/assets/sowmya.png" 
import palani from "@/assets/palani.png"
import pitchandi from "@/assets/pitchandi.png"
import mono from "@/assets/monoharan.png"
import pavai from "@/assets/pavai.png"
import siva from "@/assets/siva.png"
import mani from "@/assets/mani.png"

import sethukarasi from "@/assets/sethu.png"
import paulraj from "@/assets/paulraj.png"
import neelakandan from "@/assets/neelakandan.png"

import jaison from "@/assets/jaison.png"
import geetha from "@/assets/geetha.png"
import selvi from "@/assets/selvi.png"

import thilagavathy from "@/assets/thilaga.png"
import kavitha from "@/assets/kavitha.png"
import arthanareswaran from "@/assets/arthana.png"
import lalitha from "@/assets/lalitha.png"
import manikannan from "@/assets/manikandan.png"
import naveen from "@/assets/naveen.png"
import vijay from "@/assets/vijay.png"
import therasa from "@/assets/thera.png"
import lakshmi from "@/assets/haritha.png"
import geethaR from "@/assets/geetha.png"
import vasuki from "@/assets/vasuki.png"
import chithambaramani from "@/assets/chithambaram.png"

import mohanaprakash from "@/assets/mohan.png"
import johnberkmans from "@/assets/johnbk.png"
import jasmine from "@/assets/jasmin.png"
import prabhu from "@/assets/prabu.png"
import banupriya from "@/assets/banu.png"
import kirubakaran from "@/assets/kiruba.png"
import babyshamini from "@/assets/baby.png"
import maheswari from "@/assets/mahesh.png"
import thiyagarajan from "@/assets/thiyag.png"
import annal from "@/assets/annal.png"
import vijayabharathi from "@/assets/vijaybh.png"
import sumitha from "@/assets/sumitha.png"
import ilampiray from "@/assets/ilam.png"
import sajithra from "@/assets/saji.png"
import velmurugesh from "@/assets/vel.png"

import bharathi from "@/assets/bharathi.png"
import rohini from "@/assets/rohini.png"
import nandhini from "@/assets/nandhini.png"
import gayathri from "@/assets/gayathiri.png"
import deepa from "@/assets/deepa.png"
import haritha from "@/assets/harithav.png"
import kanimozhi from "@/assets/kani.png"
import vengateshwaran from "@/assets/venga.png"
import soniya from "@/assets/soniya.png"
import latha from "@/assets/latha.png"
import jayalakshmi from "@/assets/jaya.png"
import ramya from "@/assets/ramya.png"
import gangadevi from "@/assets/ganga.png"
import mangalapriya from "@/assets/mangala.png"
import ramesh from "@/assets/ramesh.png"
import karthikeyan from "@/assets/karthi.png"
import sindhuja from "@/assets/sindhu.png"

const members = [
  {
    name: "Thiru. R.S. Munirathinam",
    role: "Chief Patron",
    img: chief,
    intro: "Founder & Chairman of RMK Group of Institutions with decades of leadership in education."
  },
  {
    name: "Smt. Manjula Munirathinam",
    role: "Patron",
    img: manjula,
    intro: "Chairperson guiding academic excellence and institutional growth."
  },
  {
    name: "Shri. R. Jothi Naidu",
    role: "Patron",
    img: jothi,
    intro: "Director supporting operations and strategic administration."
  },
  {
    name: "Shri. R.M. Kishore",
    role: "Patron",
    img: kishore,
    intro: "Vice-Chairman promoting innovation and development."
  },
  {
    name: "Shri. Yalamanchi Pradeep",
    role: "Patron",
    img: yalamanchi,
    intro: "Secretary"
  },
  {
    name: "Dr. Durgadevi Pradeep",
    role: "Patron",
    img: durgadevi,
    intro: "Vice-Chairperson"
  },
  {
    name: "Smt. Sowmya Kishore",
    role: "Patron",
    img: sowmya,
    intro: "Management Trustee"
  },
  {
    name: "Dr. M. S. Palanichamy",
    role: "Advisor",
    img: palani,
    intro: "Advisor"
  },
  {
    name: "Shri. T. Pitchandi I.A.S",
    role: "Advisor",
    img: pitchandi,
    intro: "Advisor"
  },
  {
    name: "Shri. V. Manoharan",
    role: "Advisor",
    img: mono,
    intro: "Advisor"
  },
  {
    name: "Dr. K. A. Mohamed Junaid",
    role: "Advisor",
    img: junaid,
    intro: "Principal leading academic and research excellence."
  },
  {
    name: "Dr. S. Pavai Madheshwari",
    role: "Advisor",
    img: pavai,
    intro: "Academic Coordinator"
  },
  {
    name: "Dr. K. K. Sivagnana Prabhu",
    role: "Advisor",
    img: siva,
    intro: "Dean - CDC"
  },
  {
    name: "Dr. K. Manivannan",
    role: "Advisor",
    img: mani,
    intro: "Dean - EA"
  },
  
  {
    name: "Dr. Elwin Chandra Monie",
    role: "Advisor",
    img: elwin,
    intro: "Dean – Research driving research collaborations and innovation."
  }
]
const coreCommittee = [
  {
    title: "Convener",
    name: "Dr. K.A. Mohamed Junaid",
    role: "Principal",
    img: junaid
  },
  {
    title: "General Chair",
    name: "Dr. T. Sethukarasi",
    role: "HoD / CSE",
    img: sethukarasi
  },
  {
    title: "Conference Chair",
    name: "Dr. D. Paulraj",
    role: "Professor / CSE",
    img: paulraj
  },
  {
    title: "Conference Chair",
    name: "Dr. S. Neelakandan",
    role: "Professor / CSE",
    img: neelakandan
  }
]
const organisingCommittee = [
  {
  name: "Dr. Sethukarasi T",
  degree: "M.E., Ph.D.",
  role: "Professor & Head",
  img: sethukarasi
},
{
  name: "Dr. Paulraj D",
  degree: "M.E., Ph.D.",
  role: "Professor",
  img: paulraj
},
{
  name: "Dr. Selvi S",
  degree: "M.E., Ph.D.",
  role: "Professor",
  img: selvi
},
  {
    name: "Dr. Jaison B",
    degree: "M.E., Ph.D.",
    role: "Professor",
    img: jaison
  },
  {
    name: "Dr. Geetha C",
    degree: "M.E., Ph.D.",
    role: "Professor",
    img: geetha
  },
  {
    name: "Dr. Neelakandan S",
    degree: "M.E., Ph.D.",
    role: "Professor",
    img: neelakandan
  },
  {
  name: "Dr. Thilagavathy A",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: thilagavathy
},
{
  name: "Dr. Kavitha P",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: kavitha
},
{
  name: "Dr. Arthanareswaran A",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: arthanareswaran
},
{
  name: "Dr. Lalitha S D",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: lalitha
},
{
  name: "Dr. Manikannan K",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: manikannan
},
{
  name: "Dr. Naveen Raju D",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: naveen
},
{
  name: "Mr. Vijaya Kumar S",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr II)",
  img: vijay
},
{
  name: "Dr. Therasa P R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: therasa
},
{
  name: "Dr. Lakshmi Haritha M",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: lakshmi
},
{
  name: "Dr. Geetha R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor",
  img: geethaR
},
{
  name: "Dr. Vasukidevi G",
  degree: "M.C.A., M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: vasuki
},
{
  name: "Dr. Chithambaramani R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: chithambaramani
},
{
  name: "Dr. Mohanaprakash T A",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: mohanaprakash
},
{
  name: "Mr. John Berkmans T",
  degree: "M.Tech., (Ph.D.)",
  role: "Associate Professor",
  img: johnberkmans
},
{
  name: "Ms. Jasmine Gilda A",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: jasmine
},
{
  name: "Mr. Prabhu V",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: prabhu
},
{
  name: "Ms. Banupriya N",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: banupriya
},
{
  name: "Mr. Kirubakaran D",
  degree: "M.C.A., M.E.",
  role: "Assistant Professor (Gr II)",
  img: kirubakaran
},
{
  name: "Ms. Baby Shamini P",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor (Gr II)",
  img: babyshamini
},
{
  name: "Ms. Maheswari B",
  degree: "M.E., (Ph.D.)",
  role: "Asst. Professor (Gr II)",
  img: maheswari
},
{
  name: "Mr. Thiyagarajan M",
  degree: "B.E., M.Tech., (Ph.D.)",
  role: "Asst. Professor (Gr II)",
  img: thiyagarajan
},
{
  name: "Ms. Annal Priyadarshini D",
  degree: "M.E.",
  role: "Asst. Professor (Gr II)",
  img: annal
},
{
  name: "Mr. Vijayabharathi R",
  degree: "M.E.",
  role: "Asst. Professor (Gr II)",
  img: vijayabharathi
},
{
  name: "Ms. Sumitha T",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sumitha
},
{
  name: "Ms. Ilampiray P",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: ilampiray
},
{
  name: "Ms. Sajithra S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sajithra
},
{
  name: "Mr. Vel Murugesh Kumar N",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: velmurugesh
},
{
  name: "Ms. Bharathi B",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: bharathi
},
{
  name: "Ms. Rohini S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: rohini
},
{
  name: "Ms. Nandhini P S",
  degree: "M.E.",
  role: "Asst. Professor",
  img: nandhini
},
{
  name: "Ms. Gayathri S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: gayathri
},
{
  name: "Ms. Deepa R",
  degree: "M.Tech., (Ph.D.)",
  role: "Assistant Professor",
  img: deepa
},
{
  name: "Ms. Haritha V",
  degree: "M.E.",
  role: "Assistant Professor",
  img: haritha
},
{
  name: "Ms. Kanimozhi S",
  degree: "M.E.",
  role: "Assistant Professor",
  img: kanimozhi
},
{
  name: "Mr. Vengateshwaran M",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: vengateshwaran
},
{
  name: "Ms. M. Soniya",
  degree: "M.Tech., (Ph.D.)",
  role: "Assistant Professor",
  img: soniya
},
{
  name: "Ms. Latha J",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: latha
},
{
  name: "Ms. Jayalakshmi K",
  degree: "B.E., M.E.",
  role: "Assistant Professor",
  img: jayalakshmi
},
{
  name: "Ms. Ramya P",
  degree: "M.E.",
  role: "Asst. Professor",
  img: ramya
},
{
  name: "Ms. Ganga Devi P",
  degree: "B.E., M.Tech.",
  role: "Asst. Professor",
  img: gangadevi
},
{
  name: "Ms. Mangala Priya S",
  degree: "B.Tech., M.E., (Ph.D.)",
  role: "Asst. Professor",
  img: mangalapriya
},
{
  name: "Dr. Ramesh T",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: ramesh
},
{
  name: "Mr. Karthikeyan M P",
  degree: "M.Tech., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: karthikeyan
},
{
  name: "Ms. Sindhuja K",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sindhuja
}





]



const roles = ["All", "Chief Patron", "Patron", "Advisor"]

export default function Committees() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All" ? members : members.filter(m => m.role === filter)

  const MemberCard = ({ member }: any) => (
    <Card className="p-6 text-center rounded-2xl hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>

      <h3 className="font-bold text-lg text-primary">{member.name}</h3>
      <p className="text-sm font-medium text-gray-600">{member.role}</p>
      <p className="text-sm text-muted-foreground mt-2">{member.intro}</p>
    </Card>
  )

  return (
    <div className="bg-slate-50 pt-24 pb-20">

      <section className="container mx-auto px-6">

        <SectionHeader
          title="Committee Members"
          subtitle="Leadership & Advisory Team"
        />

        {/* 🔥 FILTER BAR FIRST */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-6 py-2 rounded-full border font-medium transition ${
                filter === r
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* 🔥 MEMBERS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(m => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
        {/* ================= CORE COMMITTEE ================= */}

<section className="mt-24">
  <SectionHeader
    title="Committee Members"
    subtitle="Convener & Chairs"
  />

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    {coreCommittee.map(member => (
      <Card key={member.name} className="p-6 text-center rounded-2xl hover:shadow-xl transition">
        <img
          src={member.img}
          alt={member.name}
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4"
        />
        <h4 className="text-sm font-semibold text-primary uppercase">
          {member.title}
        </h4>
        <h3 className="font-bold text-lg mt-1">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </Card>
    ))}
  </div>
</section>
{/* ================= ORGANISING COMMITTEE ================= */}

<section className="mt-24">
  <SectionHeader
    title="Organising Committee"
    subtitle="Conference Coordinators"
  />

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {organisingCommittee.map(member => (
      <Card
        key={member.name}
        className="bg-slate-800 text-white p-8 text-center rounded-2xl"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white mb-6"
        />

        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm opacity-80">{member.degree}</p>
        <p className="mt-2 text-base">{member.role}</p>
      </Card>
    ))}
  </div>
</section>

        {/* ================= INTERNATIONAL & NATIONAL COMMITTEES ================= */}
<section className="mt-24 bg-white rounded-3xl shadow-lg p-10">

  <SectionHeader
    title="International & National Committee Members"
    subtitle="Expert Panel and Academic Advisors"
  />

  <div className="grid md:grid-cols-2 gap-12">

    {/* ===== International ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        International Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. Naresh Chand</b> — Life Fellow IEEE, Associate Vice President, Chapter Relations, IEEE Photonics Society, USA</li>
        <li><b>Dr. San Murugesan</b> — Director, BRITE Professional Services, Adjunct Professor, Western Sydney University, Australia</li>
        <li><b>Dr. Ahmad Asari Sulaiman</b> — Professor, Universiti Teknologi MARA (UiTM), Malaysia</li>
        <li><b>Dr. Celestine Iwendi</b> — Fellow Higher Education Academy, UK</li>
        <li><b>Dr. Krishnadas Nanath</b> — Associate Professor in Data Science, Middlesex University, Dubai</li>
        <li><b>Dr. Ashish Seth</b> — Professor, INHA University, South Korea</li>
        <li><b>Dr. Mohammad T. Khasawneh</b> — Professor, Systems Science & Industrial Engineering, USA</li>
        <li><b>Dr. Yong Wang</b> — Assistant Professor, Thomas J. Watson College, USA</li>
      </ul>
    </div>

    {/* ===== National ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        National Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. P. Sakthivel</b> — Chairman, IEEE Madras Section</li>
        <li><b>Dr. S. Radha</b> — Secretary, IEEE Madras Section</li>
        <li><b>Dr. S. Brindha</b> — Treasurer, IEEE Madras Section</li>
        <li><b>Dr. V. Nagarajan</b> — Conference Committee Member</li>
        <li><b>Dr. N. Venkateswaran</b> — Professor, Dept. of ECE, Chennai</li>
        <li><b>Dr. S. Raghavan</b> — Professor (HAG), NIT Trichy</li>
        <li><b>Dr. Surajith Debnath</b> — HoD, Women's Polytechnic, Tripura</li>
        <li><b>Dr. D. Sriram Kumar</b> — Professor, Dept. of ECE, NIT Trichy</li>
        <li><b>Dr. Srinivas Talabattula</b> — Associate Professor, IISc Bangalore</li>
        <li><b>Dr. Hrishikesh Venkataraman</b> — Associate Professor, IIIT Sri City</li>
        <li><b>Dr. M.D. Selvaraj</b> — Associate Professor, IIITDM Kancheepuram</li>
        <li><b>Dr. J. Klutto Milleth</b> — Chief Technologist, CEWIT Chennai</li>
      </ul>
    </div>

  </div>
</section>


      </section>
    </div>
  )
}
