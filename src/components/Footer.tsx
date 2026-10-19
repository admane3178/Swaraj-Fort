import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-charcoal text-center border-t border-gold/10">
      <p className="text-parchment/40 font-display text-xs tracking-widest uppercase mb-2">
        जय शिवराय! • Jai Shivray!
      </p>
      <p className="text-parchment/60 text-sm">
        © {new Date().getFullYear()} Swarajya Forts. All rights reserved.
      </p>
      <p className="text-parchment/40 text-xs mt-2">
        Hero image by <Link to="/credits" className="underline hover:text-gold">Artist Name</Link> – licensed under CC BY-SA.
      </p>
    </footer>
  );
};

export default Footer;
