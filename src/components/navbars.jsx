import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "skills", href: "#skills" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <nav
        aria-label="Global"
        className="flex items-center justify-center p-6 lg:px-8"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-white hover:text-gray-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
