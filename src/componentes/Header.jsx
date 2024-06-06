import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-info">
        <h1 className="header-title">LA MEJOR HAMBUGUESA DEL CONDADO</h1>
      </div>
      <div className="img-container">
        <img className="header-image shadow" src="assets/burger.png" alt="burger" />
      </div>
    </header>
  );
}
