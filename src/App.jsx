import React, { Suspense, lazy } from "react";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import Nosotros from "./componentes/Nosotros";
import Platillos from "./componentes/Platillos";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-list">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Nosotros />
          <Platillos/>
        </Suspense>
      </main>
    </>
  );
}

export default App;
