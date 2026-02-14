export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white/20 py-16 sm:py-15 md:py-75"style={{
       backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
       backgroundSize: '20px 20px'
     }} >
      <div className="justify-center grid grid-cols-2 grid-rows-1 gap-40 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid-area-1-2-4-3 mx-auto max-w-2xl lg:mx-0 mt-5">
          <h2 className="text-5xl font-semibold tracking-tight text-black ">
            Hi there, I'm BANK
          </h2>
          <h1 className="mt-5 text-lg font-medium text-pretty text-black-300 sm:text-xl/8">
            Electronics Computer Technology
          </h1>
          <p className=" text-center p-5 rounded-lg mt-5 text-lg font-medium text-pretty text-black-300 sm:text-xl/8rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 ">
            A final-year Electronics Computer Technology student at KMUTNB.
            Specialized in integrating Software and Hardware systems with a core
            foundation in Artificial Intelligence.
          </p>
          <div>
            <div className="mt-5 flex items-center gap-2">
              <span className="opacity-70 ">follow me :</span>
              <img
                src="src/images/discord-alt-svgrepo-com.svg"
                className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                alt="Discord"
              />
              <img
                src="src/images/github-svgrepo-com.svg"
                className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                alt="GitHub"
              />
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-xl border border-gray-200 px-4 py-2 text-black transition-all hover:border-transparent hover:bg-gray-600 hover:text-white active:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="grid-area-2-2-2-2 shadow-md/30 shadow-white/20">
          <img
            src="src/images/bkks.jpg"
            alt="Profile picture of the developer"
            className="square-image rounded-lg object-cover w-100 h-100 shadow-lg shadow-black/50 "
          />
        </div>
      </div>
    </div>
  );
}
