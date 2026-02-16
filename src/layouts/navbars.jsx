import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 m-2 mx-auto max-w-7xl px-4 lg:px-8 rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-gray-200/50"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-lg font-bold text-[#2d2d2d] font-serif">
            &lt; Tanongsak-BKK /&gt;
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 dashed-border" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide hover:underline decoration-1 underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/5" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fdfbf7] px-6 py-6 sm:max-w-sm border-l border-gray-200 shadow-xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
