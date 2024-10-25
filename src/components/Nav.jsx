import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-30">
      <div className="flex justify-between items-center max-container py-6 px-4 md:px-6">
        <a href="/">
          <p className="text-white text-2xl md:text-3xl font-bold">Taran</p>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-amber-400"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center text-lg gap-8">
          {navLinks.map((item) => (
            <li className="text-xl font-semibold" key={item.label}>
              <a
                href={item.href}
                className="text-white hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((item) => (
              <li className="text-lg font-semibold" key={item.label}>
                <a
                  href={item.href}
                  className="text-white hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;