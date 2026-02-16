import phpLogo from '../assets/images/php-logo-bigger.png';
import cppLogo from '../assets/images/ISO_C++_Logo.png';
import tailwindLogo from '../assets/images/tailwind-logo.png';
import mysqlLogo from '../assets/images/MySQL_textlogo.png';
import reactLogo from '../assets/svg/react.svg';
import javaLogo from '../assets/svg/java.svg';

export default function Skills() {
  return (
    <div id="skills" className="relative isolate overflow-hidden bg-[#fdfbf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-6xl font-serif">Skills</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            technologies and tools I work and study with.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={phpLogo}
              alt="PHP"
            />
            <p className="mt-4 text-gray-800 font-semibold">PHP</p>
          </div>
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={cppLogo}
              alt="C++"
            />
            <p className="mt-4 text-gray-800 font-semibold">C++</p>
          </div>
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={tailwindLogo}
              alt="Tailwind CSS"
            />
             <p className="mt-4 text-gray-800 font-semibold">Tailwind</p>
          </div>
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={mysqlLogo}
              alt="MySQL"
            />
             <p className="mt-4 text-gray-800 font-semibold">MySQL</p>
          </div>
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={reactLogo}
              alt="React"
            />
             <p className="mt-4 text-gray-800 font-semibold">React</p>
          </div>
          <div className="paper-card flex flex-col items-center justify-center p-8 transition-all hover:scale-105 hover:shadow-md">
            <img
              className="h-20 w-auto object-contain"
              src={javaLogo}
              alt="Java"
            />
             <p className="mt-4 text-gray-800 font-semibold">Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}
