import PropTypes from "prop-types";
const Parametro = ({ nombre_parametro, valor }) => {
  return (
    <>
        <h3>{nombre_parametro}:</h3>
        <p>{valor}</p>
    </>
  );
};

Parametro.propTypes = {
  nombre_parametro: PropTypes.string,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Parametro;
