import React, { Suspense, lazy } from "react";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import Nosotros from "./componentes/Nosotros";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-list">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Nosotros />
        </Suspense>
      </div>
    </>
  );
}

export default App;
