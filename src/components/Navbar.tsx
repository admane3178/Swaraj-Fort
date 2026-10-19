import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/forts", label: "Forts" },
  { to: "/shivaji-maharaj", label: "Shivaji Maharaj" },
  { to: "/sambhaji-maharaj", label: "Sambhaji Maharaj" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center font-display text-lg font-bold text-gradient-gold tracking-wider">
          <img src={logo} alt="Swarajya Forts" className="h-8 w-auto mr-2" />
          Swarajya Forts
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-display text-xs tracking-[0.15em] uppercase transition-colors ${
                pathname === l.to ? "text-gold" : "text-parchment/70 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-parchment"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-gold/20 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-display text-sm tracking-wider ${
                pathname === l.to ? "text-gold" : "text-parchment/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;