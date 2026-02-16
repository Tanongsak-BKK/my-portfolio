export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-[#fdfbf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-6xl font-serif">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A final-year Electronics Computer Technology student at KMUTNB. Specialized in integrating Software and Hardware systems with a core foundation in Artificial Intelligence.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <div className="flex gap-x-4 paper-card p-2 bg-white rotate-[-1deg]">
            <img
              src="public/images/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover rounded-md grayscale-[20%]"
            />
          </div>
          <div className="col-span-2 paper-card p-8">
            <h3 className="text-2xl font-semibold leading-7 text-[#2d2d2d] font-serif border-b border-gray-100 pb-4 mb-4">Background</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Hi, I'm Bank (Tanongsak Phetpila). I have a strong interest in the world of tech, specifically how hardware and software integrate. 
              I enjoy coding, tackling complex logic puzzles, and studying electronics to stay updated with the latest technological trends.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-4 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">Software Development</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.07 0 1.948.56 2.466 1.408l2.67 4.296a4.5 4.5 0 0 1 1.258 3.55" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">Server Management</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">IoT & Hardware</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 flex items-center gap-4 transition-all hover:shadow-md">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">Problem Solving</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#2d2d2d] font-serif">Focusing and passionate</h3>
              <p className="mt-2 text-gray-600">has an interest in studying to be a back-end developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
