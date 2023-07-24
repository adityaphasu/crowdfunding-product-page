import { useState } from "react";
import Logo from "../assets/logo.svg";
import Ham from "../assets/icons/icon-hamburger.svg";
import Close from "../assets/icons/icon-close-menu.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = ["About", "Discover", "Get Started"];

  return (
    <header className="h-[19rem] bg-hero-mobile bg-cover bg-no-repeat lg:h-[25rem] lg:bg-hero-desktop lg:bg-contain">
      <nav className="relative flex justify-between bg-gradient-to-b from-blackish-0 to-transparent px-6 py-8 md:px-20 lg:items-center lg:py-11 lg:pl-[10.3rem] lg:pr-[9.5rem]">
        <a href="#" aria-label="crowdfund" className="z-10">
          <img src={Logo} alt="crowdfund" width="128" height="20" />
        </a>
        <button aria-label="Menu Button" onClick={toggleMenuButton} className="z-10 lg:hidden">
          <img src={isMenuOpen ? Close : Ham} alt="" width="16" height="15" />
        </button>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[2] bg-opacity-50 bg-gradient-to-b from-blackish-0 to-transparent"
            onClick={toggleMenuButton}></div>
        )}

        <ul
          className={`absolute left-0 right-0 z-10 m-auto mx-4 flex flex-col rounded-xl bg-white transition-all duration-300 lg:static lg:mx-0 lg:w-auto lg:flex-row lg:items-start lg:bg-transparent
          ${isMenuOpen ? "top-[5.5rem]" : "-top-56"} `}>
          {links.map((link, index) => (
            <li
              key={index}
              className="border border-transparent border-b-dark-gray py-[1.3rem] text-lg font-medium transition duration-200 hover:opacity-50 lg:border-0 lg:py-0">
              <a href="#" className="px-6 lg:pl-6 lg:pr-3 lg:text-[.8125rem] lg:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
