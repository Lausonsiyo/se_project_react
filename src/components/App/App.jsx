//React
import { useState } from "react";

// Components Imports
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import Main from "../Main/main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

//Style sheet import
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <ItemModal />
        <Footer />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
