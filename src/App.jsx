import { Suspense, lazy } from "react";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import Nosotros from "./componentes/Nosotros";
const Card = lazy(() => import("./Card"));

function App() {
  return (
    <>
      <Navbar />
      <div className="app-list">
        <Header/>
        <Nosotros/>
      </div>
    </>
  );
}

export default App;
