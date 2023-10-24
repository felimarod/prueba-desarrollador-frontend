import { useEffect, useReducer, useState } from "react";
import SignContext from "./context/SignContext";

import { obtenerTutorialesAPI } from "./api/formsApi";
import tutorialesReducer from "./reducers/reducer";

import Tutorials from "./components/tutorials";

// Importar SCSS
import "./styles/styles.scss";

function App() {
  const [step, setStep] = useState("all");
  const [tutoriales, dispatch] = useReducer(tutorialesReducer, []);

  useEffect(() => {
    const getTutoriales = async () => {
      const tutoriales = await obtenerTutorialesAPI();
      if (tutoriales) {
        // Modifica el state
        dispatch({ type: "CARGAR", tutoriales });
      } else {
        // Modifica el state
        dispatch({ type: "CARGAR" });
      }
    };
    getTutoriales();
  }, []);

  return (
    <>
      <SignContext.Provider value={{ step, setStep }}>
        <div className="container">
          <main>{step === "all" && <Tutorials tutoriales={tutoriales} />}</main>
        </div>
      </SignContext.Provider>
    </>
  );
}

export default App;
