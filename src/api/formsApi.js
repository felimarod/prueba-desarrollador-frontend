// Librerías externas
import axios from "axios";

/**
 * Obtiene los tutoriales del backend
 * @returns Lista de tutoriales
 */
const obtenerTutorialesAPI = async () => {
  try {
    const respuesta = await axios.get(import.meta.env.VITE_BACKEND_URL);
    if (respuesta.status === 200) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al obtener los tutoriales");
    return null;
  }
};

/**
 * Crea un Tutorial en el backend
 * @param {*} tutorial Tutorial a crear
 * @returns Tutorial creado
 */
const agregarTutorialAPI = async (tutorial) => {
  try {
    const respuesta = await axios.post(
      import.meta.env.VITE_BACKEND_URL,
      tutorial
    );
    if (respuesta.status === 201) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al crear el tutorial");
    return null;
  }
};

/**
 * Elimina un tutorial del backend
 * @param {*} id Identificador del tutorial
 * @returns Un objeto vacío si la eliminación fue exitosa y null de lo contrario
 */
const eliminarTutorialAPI = async (id) => {
  try {
    const respuesta = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}${id}`
    );
    if (respuesta.status === 200) {
      return respuesta.data;
    }
    return null;
  } catch (error) {
    console.error("Hubo un error al eliminar el tutorial");
    return null;
  }
};

export { obtenerTutorialesAPI, agregarTutorialAPI, eliminarTutorialAPI };
