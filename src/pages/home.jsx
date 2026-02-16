import discordIcon from '../assets/svg/discord-alt-svgrepo-com.svg';
import githubIcon from '../assets/svg/github-svgrepo-com.svg';

export default function Home() {
  return (
    <div id="home" className="relative isolate overflow-hidden bg-[#fdfbf7] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-6xl font-serif">
                Hi there, I'm BANK
              </h2>
              <h1 className="mt-4 text-lg font-medium text-gray-600 sm:text-xl">
                Electronics Computer Technology
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 p-6 paper-card">
                A final-year Electronics Computer Technology student at KMUTNB.
                Specialized in integrating Software and Hardware systems with a core
                foundation in Artificial Intelligence.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <span className="text-sm font-semibold leading-6 text-gray-500 uppercase tracking-widest">follow me</span>
                <a href="https://discord.com/users/358679074803286016" target="_blank" rel="noopener noreferrer">
                  <img
                    src={discordIcon}
                    className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
                    alt="Discord"
                  />
                </a>
                <a href="https://github.com/Tanongsak-BKK" target="_blank" rel="noopener noreferrer">
                  <img
                    src={githubIcon}
                    className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
                    alt="GitHub"
                  />
                </a>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="paper-button-primary"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="mt-0 lg:mt-0 lg:ml-auto">
            <div className="p-2 bg-white border border-gray-200 shadow-xl rotate-3 rounded-xl max-w-md mx-auto">
              <img
                src="src/assets/images/bkks.jpg"
                alt="Profile picture of the developer"
                className="w-full h-auto rounded-lg object-cover aspect-[4/5] grayscale-[20%] sepia-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
