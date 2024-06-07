import React from "react";
import ContactForm from "./ContactForm";

export default function Contacto() {
  return (
    <section id="contacto">
      <div className="contacto-container">
        <h2 className="section-title">Contacto ✉</h2>
        <h3 className="contacto-msj">Dejanos tu mensaje</h3>

        <ContactForm />
      </div>
    </section>
  );
}
