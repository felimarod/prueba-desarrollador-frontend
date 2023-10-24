import PropTypes from "prop-types";
import Parametro from "./parametro";

const Tutorial = ({ tutorial }) => {
  console.log(tutorial);
  return (
    <>
      <Parametro nombre_parametro={"Id"} valor={tutorial[0]} />
      <Parametro nombre_parametro={"Tema"} valor={tutorial[1]} />
      <Parametro nombre_parametro={"Descripcion"} valor={tutorial[2]} />
      <Parametro nombre_parametro={"Titulo"} valor={tutorial[3]} />
      <Parametro nombre_parametro={"Visible"} valor={tutorial[4]} />
      <Parametro nombre_parametro={"Id detalle"} valor={tutorial[5]} />
    </>
  );
};

Tutorial.propTypes = {
  tutorial: PropTypes.array,
};

export default Tutorial;
