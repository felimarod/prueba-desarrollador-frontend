const tutorialesReducer = (tutoriales, action) => {
  // Verifica el tipo de acción a ejecutar
  switch (action.type) {
    case "CARGAR":
      return action.tutoriales? [...action.tutoriales] : [];
    case "AGREGAR":
      return [...tutoriales, action.nuevoTutorial];
    case "MODIFICAR":
      return tutoriales.map((tutorial) =>
        // Verifica si el tutorial tiene el mismo id
        tutorial.id === action.id
          ? { ...tutorial, terminado: !tutorial.terminado }
          : tutorial
      );
    case "ELIMINAR":
      return tutoriales.filter((tutorial) => tutorial.id !== action.id);
    default:
      throw Error(`Acción no soportada: ${action.type}`);
  }
};

export default tutorialesReducer;
