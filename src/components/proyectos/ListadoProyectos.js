import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
//import AlertaContext from "../../context/alertas/alertaContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyectos = () => {
  // Extrar proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  //if (proyectos.length === 0) return null;

  // const alertaContext = useContext(AlertaContext);
  //const { alerta, mostrarAlerta } = alertaContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    // si hay un error
    /*  if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    } */

    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  // revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza uno nuevo</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={2000}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
