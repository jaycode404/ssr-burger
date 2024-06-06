import React from "react";

export default function Navbar() {
  const navlist = ["Platillos", "Nosotros", "Contacto"];
  return (
    <nav className="navbar">
      <div>Logo</div>
      <div className="navlist">
        {navlist.map((link, index) => {
          return <a key={index} href={`#${link.toLocaleLowerCase()}`}>{link}</a>;
        })}
      </div>
    </nav>
  );
}
