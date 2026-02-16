import { useState } from "react";
import phpLogo from '../assets/images/php-logo-bigger.png';
import cppLogo from '../assets/images/iso_c++_logo.png';
import flutterImg from '../assets/images/flutter.jpg';
import reactLogo from '../assets/svg/react.svg';
import resumePdf from '../assets/pdf/tanongsak_phrtpila.pdf';

export default function Education() {
  const [page, setPage] = useState("edu");

  return (
    <div
      id="education"
      className="relative isolate overflow-hidden bg-[#fdfbf7] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl font-serif">
            My Journey
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-2 gap-x-1 rounded-md bg-white p-1 text-center text-xs font-semibold leading-5 border border-gray-200 shadow-sm">
              <button
                onClick={() => setPage("edu")}
                className={`cursor-pointer rounded-md px-4 py-2.5 transition-all ${page === "edu" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => setPage("project")}
                className={`cursor-pointer rounded-md px-4 py-2.5 transition-all ${page === "project" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          {page === "edu" && (
            <div className="space-y-8">
              <div className="paper-card p-8 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold leading-7 text-[#2d2d2d] font-serif">King Mongkut’s University of Technology North Bangkok</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-0 font-medium">2024 - Present
                  </p>
                </div>
                <p className="mt-2 text-base leading-7 text-gray-800 font-medium">Electronics Computer Technology</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Studied software development, databases, microcontroller programming, and basic AI.
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 paper-button flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    View Transcript
                  </a>
                </p>
              </div>
              <div className="paper-card p-8 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold leading-7 text-[#2d2d2d] font-serif">Minburi Technical College</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-0 font-medium">2021 - 2022</p>
                </div>
                <p className="mt-2 text-base leading-7 text-gray-800 font-medium">Industrial Electronics</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Studied electronic circuit design and calculation along with fundamental PLC programming to control industrial automation systems.
                </p>
              </div>
              <div className="paper-card p-8 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold leading-7 text-[#2d2d2d] font-serif">Minburi Administration Vocational College</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-0 font-medium">2019 - 2021</p>
                </div>
                <p className="mt-2 text-base leading-7 text-gray-800 font-medium">Business Computer</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Studied Business Computer focusing on web development (HTML/CSS), graphic design (Photoshop, Illustrator), and core business skills including accounting and marketing.
                </p>
              </div>
            </div>
          )}

          {page === "project" && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="paper-card overflow-hidden transition-all hover:shadow-md group">
                <a href="https://github.com/Tanongsak-BKK/my_app.git" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-48 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={flutterImg}
                      alt="Mobile App"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#2d2d2d] font-serif group-hover:text-[#8d6e63] transition-colors">Moblie App</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#8d6e63]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Brief description of calculation program or web application developed using Flutter and Dart.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Flutter</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Dart</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="paper-card overflow-hidden transition-all hover:shadow-md group">
                <a href="https://github.com/Tanongsak-BKK/my-portfolio.git" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-48 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={reactLogo}
                      alt="Portfolio"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#2d2d2d] font-serif group-hover:text-[#8d6e63] transition-colors">Portfolio</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#8d6e63]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      A portfolio website built with React.js + tailwindcss + vite + emailjs + nodejs.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">React</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Tailwindcss</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Vite</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Emailjs</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Nodejs</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
