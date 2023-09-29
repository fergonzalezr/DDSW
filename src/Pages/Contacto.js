import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS
import "./Styles/Contacto.css";
function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensaje</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary" id="submit-btn">Enviar</button>

        </div>
      </form>
      
    </div>
  );
}

export default Contacto;
