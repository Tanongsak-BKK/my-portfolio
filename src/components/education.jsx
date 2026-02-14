import { useState } from "react";

export default function Education() {
  const [page, setPage] = useState("edu");

  return (
    <div
      className="relative isolate overflow-hidden bg-white/20 py-24 sm:py-32 lg:py-45 "
      style={{
        backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="p-4 max-w-md mx-auto mt-0">
        <div className="flex bg-gray-200 p-1 rounded-lg">
          <button
            onClick={() => setPage("edu")}
            className={`flex-1 py-2 rounded-md text-sm font-bold ${page === "edu" ? "bg-white shadow" : "text-gray-500"}`}
          >
            Education
          </button>
          <button
            onClick={() => setPage("experience")}
            className={`flex-1 py-2 rounded-md text-sm font-bold ${page === "experience" ? "bg-white shadow" : "text-gray-500"}`}
          >
            Experience
          </button>
        </div>
      </div>

      <div className="mt-4">
        {page === "edu" && (
          <div className="grid grid-cols-3 grid-rows-3 gap-10 ms-80 mt-10 me-80 ">
            <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30 rounded-xl bg-white/80 backdrop-blur-xl shadow-xl/10 border border-white/50 p-6 transition-all">
              <h1 className="text-xl font-medium text-black">
                King monkut’s university of technology north bangkok
                2024-Present
              </h1>
              <h2 className="mt-2 text-sm font-small text-pretty text-black-300 sm:text-xl/8">
                Electronics Computer Technology
              </h2>
              <p className="mt-2 text-sm font-small text-pretty text-black-300 ">
                Studied software development databases microcontroller
                programming and basic AI.
              </p>
            </div>
            <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30 rounded-xl bg-white/80 backdrop-blur-xl shadow-xl/10 border border-white/50 p-6 transition-all">
              <h1 className="text-xl font-medium text-black">
                Minburi Technical college 2021-2022
              </h1>
              <h2 className="mt-2 text-sm font-small text-pretty text-black-300 sm:text-xl/8">
                Industrial Electronics
              </h2>
              <p className="mt-2 text-sm font-small text-pretty text-black-300 ">
                Studied electronic circuit design and calculation along with
                fundamental PLC programming to control industrial automation
                systems.
              </p>
            </div>
            <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30 rounded-xl bg-white/80 backdrop-blur-xl shadow-xl/10 border border-white/50 p-6 transition-all">
              <h1 className="text-xl font-medium text-black">
                Minburi Administration Vocational College 2019-2021
              </h1>
              <h2 className="mt-2 text-sm font-small text-pretty text-black-300 sm:text-xl/8">
                Business Computer
              </h2>
              <p className="mt-2 text-sm font-small text-pretty text-black-300 ">
                Studied Business Computer focusing on web development html css
                graphic design photoshop illustrator and core business skills
                including accounting and marketing.
              </p>
            </div>
          </div>
        )}

        {page === "experience" && (
          <div>
            <div className="grid grid-cols-3 grid-rows-3 gap-20 m-10 mt-30  ">
              <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30">
                <p className=""></p>
              </div>
              <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30">
                <p className=""></p>
              </div>
              <div className="col-span-3 row-span-1 h-fit mb-0 ms-30 me-30">
                <p className=""></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
