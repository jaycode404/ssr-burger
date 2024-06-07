import React, { Suspense, lazy } from "react";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import Nosotros from "./componentes/Nosotros";
import Platillos from "./componentes/Platillos";
import Clientes from "./componentes/Clientes";
import Contacto from "./componentes/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-list">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Nosotros />
          <Platillos/>
          <Clientes/>
          <Contacto/>
        </Suspense>
      </main>
    </>
  );
}

export default App;
