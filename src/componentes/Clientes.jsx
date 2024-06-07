import React from "react";

export default function Clientes() {
  const reviews = [
    {
      img: "ruta-de-la-imagen-1.jpg",
      nombre: "Producto 1",
      rate: 4.5,
      review: "Buena calidad, lo recomiendo.",
    },
    {
      img: "ruta-de-la-imagen-2.jpg",
      nombre: "Producto 2",
      rate: 4.0,
      review: "Excelente, cumplió con mis expectativas.",
    },
    {
      img: "ruta-de-la-imagen-3.jpg",
      nombre: "Producto 3",
      rate: 4.8,
      review: "Increíble producto, volvería a comprarlo.",
    },
    {
      img: "ruta-de-la-imagen-4.jpg",
      nombre: "Producto 4",
      rate: 3.7,
      review: "Bueno, pero podría mejorar en algunos aspectos.",
    },
    {
      img: "ruta-de-la-imagen-5.jpg",
      nombre: "Producto 5",
      rate: 4.2,
      review: "Satisfecho con mi compra.",
    },
  ];

  return (
    <section id="clientes">
      <h2 className="section-title">Clientes ✓</h2>
      <div className="review-container">
        {reviews.map((rev, index) => {
          const { img, nombre, rate, review } = rev;
          return (
            <div className="rev-card card">
              <h4>{nombre}</h4>
              <p>{rate}</p>
              <p>{review}</p>
            </div>
          );
        })}
      </div>

      <p className="clientes-discurso">En [Nombre de la Tienda], la satisfacción de nuestros clientes es nuestra prioridad número uno. Nos esforzamos por ofrecer hamburguesas deliciosas y un servicio excepcional en cada visita. Valoramos tus comentarios y trabajamos constantemente para superar tus expectativas. ¡Gracias por elegirnos!</p>
    </section>
  );
}
