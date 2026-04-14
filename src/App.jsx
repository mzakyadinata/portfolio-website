import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Moon, Sun } from "lucide-react";
import { FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiDaisyui } from "react-icons/si";
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Presensia Website App",
      desc: "Aplikasi absensi berbasis web ",
      tech: ["React JS", "Tailwind CSS", "Daisy UI"],
      image: "/src/assets/presensia-app.png",
      links: "https://github.com/mzakyadinata/presensia-app.git",
    },
    {
      title: "Landing Page Presensia",
      desc: "Landing page produk Presensia",
      tech: ["React JS", "Tailwind CSS"],
      image: "/src/assets/presensia-lp.png",
      links: "https://github.com/mzakyadinata/presensia-landingPage.git",
    },
    {
      title: "Website Internal MTS Roudhotul Banat",
      desc: "Website administrasi internal MTS Roudhotul Banat",
      tech: ["React JS", "Tailwind CSS", "Daisy UI"],
      image: "/src/assets/samatsaruba.png",
      links: "https://github.com/IanFreez/samatsaruba.git",
    },
    {
      title: "Design Website Elmanuk",
      desc: "Design website jual kebutuhan burung",
      tech: ["Figma"],
      image: "/src/assets/elmanuk.png",
      links:
        "https://www.figma.com/design/UcPYUpGId6WV14TEaDgbQA/elmanuk?m=auto&t=kV6O5bw5iySgF6Ew-6",
    },
    {
      title: "Redesign Website Labschool Unesa",
      desc: "Redesign website milik Labschool Unesa ke design yang lebih fresh dan baru",
      tech: ["Figma"],
      image: "/src/assets/redesign-web.png",
      links:
        "https://www.figma.com/proto/aH4obxHoJFdcGVBya07XI4?node-id=0-1&t=kV6O5bw5iySgF6Ew-6",
    },
  ];

  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Javascript", icon: <SiJavascript /> },
        { name: "Daisy UI", icon: <SiDaisyui /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-100px] left-[-100px]"></div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-0">
        <div data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Halo, saya <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Zaky
            </span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-md">
            Saya seorang Frontend Web Developer. Saya memiliki pengalaman dalam
            membuat aplikasi web dan desain yang menarik.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-6 py-3 bg-purple-600 rounded-xl hover:scale-105 transition shadow-lg shadow-purple-600/30"
          >
            Lihat Project
          </button>
        </div>
        <div className="relative mt-10 md:mt-0" data-aos="fade-left">
          {/* Glow  */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-102 h-102 rounded-full bg-purple-600/20 blur-3xl"></div>
          </div>
          {/* Ring  */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-102 h-102 rounded-full border border-purple-500/30"></div>
          </div>
          {/* Photo */}
          <img
            src="/src/assets/author.png"
            className="relative w-64 md:w-110 -mt-20 z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          />
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="px-8 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Project</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden group relative flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-grow">
                {/* TITLE (dibatasi 2 baris) */}
                <h3 className="text-lg font-semibold line-clamp-2 min-h-[56px]">
                  {project.title}
                </h3>

                {/* DESC (dibatasi 2 baris) */}
                <p className="text-sm text-gray-400 line-clamp-2 min-h-[40px]">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* PUSH LINK KE BAWAH */}
                <div className="mt-auto">
                  <a
                    href={project.links}
                    target="_blank"
                    className="inline-block mt-4 text-sm text-purple-400 hover:underline"
                  >
                    Lihat →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">Pengalaman</h2>
        <div className="bg-[#111] p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg hover:shadow-purple-500/10 transition">
          <img
            src="/src/assets/otakkanan-logo.png"
            className="w-full md:w-1/2 rounded-xl"
          />
          <div>
            <h3 className="text-xl font-semibold">PT Otak Kanan</h3>
            <p className="text-gray-400 text-sm">Feb 2025 - Jun 2025</p>
            <ul className="mt-3 text-gray-400 text-sm flex flex-col gap-2">
              <li>
                - Mengembangkan landing page produk Presensia menggunakan
                ReactJS
              </li>
              <li>
                - Mengembangkan Presensia untuk versi website menggunakan
                ReactJS{" "}
              </li>
              <li>
                - Mengembangkan landing page dan aplikasi Presensia berdasarkan
                desain yang dibuat oleh tim UI/UX{" "}
              </li>
              <li>
                - Membuat data json untuk keperluan testing aplikasi Presensia
                versi Website{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#111] p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-purple-500 mb-4">{skill.title}</h3>

              <div className="flex flex-col gap-3">
                {skill.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-xl text-purple-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="px-8 md:px-20 py-24">
        <div className="bg-[#111] rounded-2xl p-10 text-center relative overflow-hidden">
          {/* glow */}
          <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[100px] top-[-50px] left-1/2 -translate-x-1/2"></div>

          <h2 className="text-3xl font-bold mb-4 relative z-10">Kontak</h2>

          <p className="text-gray-400 mb-10 relative z-10">
            Tertarik bekerja sama atau ingin berdiskusi? Hubungi saya
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            {/* EMAIL */}
            <div className="bg-[#0b0b0f] px-6 py-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-medium">zakyadinata07@gmail.com</p>
            </div>

            {/* PHONE */}
            <div className="bg-[#0b0b0f] px-6 py-4 rounded-xl border border-white/10 hover:scale-105 transition">
              <p className="text-sm text-gray-400">No. Telepon</p>
              <p className="text-white font-medium">0895410454398</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
