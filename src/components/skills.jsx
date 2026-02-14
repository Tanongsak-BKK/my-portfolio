export default function Skills() {
  return (
    <div className="relative isolate overflow-hidden bg-white/20  sm:py-32 lg:py-45 " style={{
       backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
       backgroundSize: '20px 20px'
     }} >
      <div>
        <h1 className="text-center text-5xl font-semibold tracking-tight text-black ">
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10 h-fit mb-0 mx-auto max-w-4xl ">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all ">
          <img
            className="ms-8 mt-5 max-w-full w-40 h-30"
            src="src/images/php-logo-bigger.png"
            alt="image description"
          />
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all ">
          <img
            className="ms-13.5 mt-5 max-w-full w-30 h-33"
            src="src/images/ISO_C++_Logo.png"
            alt="image description"
          />
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all ">
          <img
            className="ms-8 max-w-full w-40 h-40"
            src="src/images/tailwind-logo.png"
            alt="image description"
          />
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all ">
          <img
            className=" max-w-full ms-2 mt-7"
            src="src/images/MySQL_textlogo.png"
            alt="image description"
          />
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all ">
          <img
            className="ms-9  max-w-full w-40 h-30"
            src="src/assets/react.svg"
            alt="image description"
          />
        </div>
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-white/20 p-6 transition-all hover:scale-105">
          <img
            className="ms-6  max-w-full w-40 h-30"
            src="src/images/java.svg"
            alt="image description"
          />
        </div>
      </div>
      
    </div>
  );
}
