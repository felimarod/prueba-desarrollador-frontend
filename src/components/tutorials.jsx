import PropTypes from "prop-types";
import Tutorial from "./tutorial";

const Tutorials = ({ tutoriales }) => {
  return (
    <>
      {!tutoriales.length && "No hay tutoriales"}
      {tutoriales.map((tutorial) => (
        <Tutorial tutorial={tutorial} />
      ))}
    </>
  );
};

Tutorials.propTypes = {
  tutoriales: PropTypes.array,
};
export default Tutorials;
