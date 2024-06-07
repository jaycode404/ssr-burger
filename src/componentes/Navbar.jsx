import React from "react";

export default function Navbar() {
  const navlist = ["Nosotros", "Platillos", "Contacto"];
  return (
    <nav className="navbar navbar-shadow">
      <div>Logo</div>
      <div className="navlist">
        {navlist.map((link, index) => {
          return <a className="nav-link" key={index} href={`#${link.toLocaleLowerCase()}`}>{link}</a>;
        })}
      </div>
    </nav>
  );
}
