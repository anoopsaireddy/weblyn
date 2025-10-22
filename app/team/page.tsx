import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team - Lynlytics",
  description: "Meet the brilliant minds behind Lynlytics, building the future of business intelligence.",
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Anoopsai Reddy Chandiri",
      role: "Co-Founder",
      focus: "Product (Applied AI, GTM)",
      bio: "Applied Science at Rcee Networks; building healthcare AI. (M.S., Northeastern)",
      image: "/weblyn/assets/anoop.jpg",
      linkedin: "https://www.linkedin.com/in/anoopsaicreddy/",
    },
    {
      name: "Jai Prakash Veerla",
      role: "Co-Founder",
      focus: "Reasoning & Agent Systems",
      bio: "Research at Google - Android XR & Gemini; SOTA LLM reasoning/evals. (Ph.D. Candidate, UT Arlington)",
      image: "/weblyn/assets/jai.jpg",
      linkedin: "https://www.linkedin.com/in/jai-prakash-veerla/",
    },
    {
      name: "Saketh Bantu",
      role: "Co-Founder",
      focus: "Data Platform & Security",
      bio: "Enterprise Data Science at Church & Dwight; building MLOps (M.S., Eastern Illinois)",
      image: "/weblyn/assets/saketh.jpg",
      linkedin: "https://www.linkedin.com/in/sakethbantu/",
    },
  ]

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              The brilliant minds behind Lynlytics, building the future of business intelligence.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card text-center">
                  <div className="mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-[120px] h-[120px] rounded-full object-cover border-4 border-white/80 shadow-lg mx-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-2">{member.role}</p>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{member.focus}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to work with our team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started with Lynlytics and experience the power of our AI-driven business intelligence.
            </p>
            <Link
              href="/coming-soon"
              className="inline-flex items-center px-8 py-4 rounded-full text-white text-lg font-semibold hover:opacity-90 transition-all duration-200 bg-[#1877F2]"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
