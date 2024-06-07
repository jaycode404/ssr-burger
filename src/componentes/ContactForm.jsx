import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);
    // Restablecer los campos del formulario
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card form-card">
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <br />
          <br />
        </div>
        <div>
          <button className="button" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
