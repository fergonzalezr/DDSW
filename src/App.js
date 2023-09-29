import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import Galeria from "./Pages/Galeria";
import Contacto from "./Pages/Contacto";

function App() {
  //hook state para definir un estado
  const [texto, setexto] = useState("");
  useEffect(() => {
    document.title = texto;
  }, [texto]);
  //cada vez que cambie texto se va a ejecutar la función

  function cambiar(e) {
    setexto(e.target.value);
  }

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/inicio">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/nosotros">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/galeria">Galería</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="http://localhost:3000/contacto">Contacto</a>
        </li>
        <li>
 
        </li>

     
      </ul>
      
    </div>
  </div>
</nav>



      <Router>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
