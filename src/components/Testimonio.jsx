import React from "react";
import '../css/Testimonio.css';

function Testimonio(props){
    return (
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio" 
                src={require(`../imagenes/${props.imagen}.png`)} 
                alt={`Foto de ${props.nombre}`} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">{props.nombre} in {props.pais}</p>
                <p className="cargo-empresa">{props.cargo} at {props.empresa}</p>
                <p className="texto-testimonio">
                    {props.testimonio}
                </p>
            </div>
        </div>
    );
}

export default Testimonio;

