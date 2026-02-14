export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white/20 py-24 sm:py-45"style={{
       backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
       backgroundSize: '20px 20px'
     }} >
      <div className="grid grid-cols-3 grid-rows-3 gap-7 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="col-span-3 row-span-1  mb-0 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
          <h1 className="text-center text-5xl font-semibold tracking-tight text-black">
            About Me
          </h1>
          <p className="flex items-center justify-center mt-8 text-black-300 text-mg p-5">
            A final-year Electronics Computer Technology student at KMUTNB. Specialized in integrating Software and Hardware systems with a core foundation in Artificial Intelligence.
          </p>
        </div>
        <div className="col-span-1 row-span-2">
          <img
            src="src/images/profile.jpg"
            alt="Profile picture of the developer"
            className="square-image rounded-lg object-cover w-100 h-100 shadow-lg shadow-black/50 "
          />
        </div>
        <div className="col-span-2 row-span-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 p-6 transition-all">
          <h1>Lorem</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquam reprehenderit exercitationem cumque excepturi. Atque quos
            deserunt deleniti doloremque, magnam repellendus modi a, sapiente
            saepe dolores eveniet iusto et dignissimos.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-1.5 ">
            <div className="flex items-start justify-between p-5 m-2 max-w-fit px-8 row-1 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
              Lorem{" "}
            </div>
            <div className="flex items-start justify-between p-5 m-2 max-w-fit px-8 row-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
              Lorem{" "}
            </div>
            <div className="flex items-start justify-between p-5 m-2 max-w-fit px-8 row-1 col-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
              Lorem{" "}
            </div>
            <div className="flex items-start justify-between p-5 m-2 max-w-fit px-8 row-2 col-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
              Lorem{" "}
            </div>
          </div>
          <div>
            <h1>HHH</h1>
            <p>HHHDDDDD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
