export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 md:py-55">
      
      <div className="justify-center grid grid-cols-2 grid-rows-1 gap-40 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid-area-1-2-4-3 mx-auto max-w-2xl lg:mx-0 mt-25">
          <h2 className="text-7xl font-semibold tracking-tight text-white ">
            Welcome to My Portfolio
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Hi! I'm [Your Name], a passionate developer specializing in creating
            beautiful and functional web applications. Explore my work and get
            in touch!
          </p>
        </div>

        <div className="grid-area-2-2-2-2 shadow-md/30 shadow-white/20">
          <img
            src="src/images/profile.jpg"
            alt="Profile picture of the developer"
            className="square-image rounded-lg object-cover w-150 h-130"
          />
        </div>
        
      </div>

    </div>
  );
}
