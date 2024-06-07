import React from "react";
const hamburguesas = [
  {
    nombre: "Cheeseburger Clásica",
    rate: 4.5,
    img: "assets/burger.png",
    descripcion: "Una deliciosa hamburguesa con queso cheddar, lechuga, tomate, cebolla y una salsa especial."
  },
  {
    nombre: "Hamburguesa BBQ",
    rate: 4.7,
    img: "assets/burger.png",
    descripcion: "Hamburguesa jugosa con salsa BBQ, cebolla caramelizada, queso cheddar y bacon crujiente."
  },
  {
    nombre: "Hamburguesa Vegetariana",
    rate: 4.3,
    img: "assets/burger.png",
    descripcion: "Una opción saludable con un jugoso patty de lentejas, lechuga, tomate, cebolla y guacamole."
  },
  {
    nombre: "Hamburguesa de Pollo",
    rate: 4.6,
    img: "assets/burger.png",
    descripcion: "Tierna pechuga de pollo a la parrilla con lechuga, tomate, queso suizo y mayonesa de ajo."
  },
  {
    nombre: "Hamburguesa de Jalapeños",
    rate: 4.4,
    img: "assets/burger.png",
    descripcion: "Hamburguesa picante con jalapeños, queso pepper jack, lechuga, tomate y salsa chipotle."
  }
];



export default function Platillos() {
  return <section id="platillos">
    <div className="platillos-container">
      {hamburguesas.map((hamburguesa, index) => {
        const {nombre, rate, img, descripcion} = hamburguesa
        return(
          <div className="product-card">
            <img className="product-img" src={`${img}`} alt="" />
            <h3 className="product-name">{nombre}</h3>
            <p className="product-desc">{descripcion}</p>
          </div>
        )
      })}
    </div>
  </section>;
}
