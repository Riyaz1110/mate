import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

/* ========= IMPORT IMAGES ========= */

import peer from "@/assets/peer.png"
import ribas from "@/assets/ribas.png"
import han from "@/assets/han.png"
import kendall from "@/assets/kendall.png"
import goh from "@/assets/Goh.png"

import john from "@/assets/john.png"
import ari from "@/assets/happo.png"
import pek from "@/assets/pek.png"

/* ================================= */


/* ========= RMKMATE25 SPEAKERS ========= */

const speakers25 = [
  {
    name: "Prof. Dr. Peter Peer",
    role: "Executive Editor – ICT Express",
    affiliation: "University of Ljubljana, Slovenia",
    image: peer,
    bio: "Head of the Computer Vision Laboratory with extensive research contributions in AI and Image Processing."
  },
  {
    name: "Prof. Guillem Alenya Ribas",
    role: "Director",
    affiliation: "Institut de Robòtica i Informàtica Industrial, Spain",
    image: ribas,
    bio: "Joint centre of the Spanish Scientific Research Council (CSIC) and Polytechnic University of Catalonia."
  },
  {
    name: "Prof. Dong Seog HAN",
    role: "Co-Editor-in-Chief – ICT Express",
    affiliation: "Kyungpook National University, South Korea",
    image: han,
    bio: "Head of Intelligent Signal Processing Laboratory and expert in communication systems."
  },
  {
    name: "Professor Dr. Graham Kendall",
    role: "Former Editor-in-Chief – IEEE Transactions",
    affiliation: "Malaysia",
    image: kendall,
    bio: "Research leader in computational intelligence and AI applications."
  },
  {
    name: "Professor Dr. Goh Khang Wen",
    role: "Pro Vice-Chancellor, Global Engagement",
    affiliation: "INTI International University, Malaysia",
    image: goh,
    bio: "Academic leader driving global engagement initiatives and international collaborations."
  }
]

/* ========= RMKMATE23 SPEAKERS ========= */

const speakers23 = [
  {
    name: "Dr. Ari Happonen",
    role: "Associate Professor",
    affiliation: "LUT University, Lappeenranta, Finland",
    image: ari,
    bio: "School of Engineering Science"
  },
  {
    name: "Dr. John MacIntyre",
    role: "Professor of Artificial Intelligence",
    affiliation: "Sunderland, England, United Kingdom",
    image: john,
    bio: ""
  },
  {
    name: "Dr. Chuen Khee PEK",
    role: "Head - School of Management and Marketing",
    affiliation: "Taylor's University, Malaysia",
    image: pek,
    bio: ""
  }
]


export default function Speakers() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6">

        {/* ========= RMKMATE26 COMING SOON CARD ========= */}

        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-slate-100 border border-slate-200 rounded-3xl shadow-xl p-16 text-center">

            <div className="flex justify-center mb-6">
              <Calendar className="w-14 h-14 text-slate-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Keynote Speakers - RMKMATE26
            </h2>

            <p className="text-lg text-slate-600">
              Speaker details will be announced soon.
            </p>

          </div>
        </div>


        {/* ========= RMKMATE25 ========= */}

        <SectionHeader title="Keynote Speakers - RMKMATE25" />

        <div className="space-y-10 max-w-6xl mx-auto mb-20">
          {speakers25.map((sp) => (
            <Card
              key={sp.name}
              className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">

                <div className="md:w-72 w-full overflow-hidden">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="w-full h-full object-cover min-h-[260px] group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <Badge className="mb-4 bg-primary/10 text-primary w-fit">
                    Keynote Speaker
                  </Badge>

                  <h3 className="text-3xl font-bold text-slate-900 mb-1">
                    {sp.name}
                  </h3>

                  <p className="text-lg font-semibold text-primary">
                    {sp.role}
                  </p>

                  <p className="text-muted-foreground italic mb-4">
                    {sp.affiliation}
                  </p>

                  <div className="w-14 h-1 bg-primary rounded mb-4" />

                  <p className="text-muted-foreground leading-relaxed">
                    {sp.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>


        {/* ========= RMKMATE23 ========= */}

        <SectionHeader title="Keynote Speakers - RMKMATE23" />

        <div className="space-y-10 max-w-6xl mx-auto">
          {speakers23.map((sp) => (
            <Card
              key={sp.name}
              className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">

                <div className="md:w-72 w-full overflow-hidden">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="w-full h-full object-cover min-h-[260px] group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <Badge className="mb-4 bg-primary/10 text-primary w-fit">
                    Keynote Speaker
                  </Badge>

                  <h3 className="text-3xl font-bold text-slate-900 mb-1">
                    {sp.name}
                  </h3>

                  <p className="text-lg font-semibold text-primary">
                    {sp.role}
                  </p>

                  <p className="text-muted-foreground italic mb-4">
                    {sp.affiliation}
                  </p>

                  <div className="w-14 h-1 bg-primary rounded mb-4" />

                  <p className="text-muted-foreground leading-relaxed">
                    {sp.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
