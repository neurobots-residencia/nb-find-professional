import React from "react";
import { useStore } from "../scripts/controlador-estados";


const Card = (props) => {
  const { armazenaDestino, origem } = useStore();
 
  return (
    <div
      className=" w-card p-1 border flex flex-row justify-evenly rounded-lg border-gray-600 placeholder-gray-500"
      id={props.id}
    >
      <div className="flex flex-col min-w-min max-w-xs gap-1">
        <div className="flex text-center gap-4 py-4">
          <img
            className="h-6"
            src="/assets/neurobots_logo.png"
            alt="Logo Neurobots"
          ></img>
          <h1 className="font-bold text-lg py-1 text-indigo-950">
            {" "}
            {props.clinica}{" "}
          </h1>
        </div>
        <span className="font-semibold">{props.endereco_atendimento}</span>
        <div>Telefone: {props.contato} </div>
        <div>Email: {props.email}</div>
        <p>{props.distance}</p>
        <button
          className="m-4 w-32 h-8 ml-20 bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded"
          onClick={(event) => {
            armazenaDestino(
              props.lat,
              props.lng
            );
            document
              .querySelector(
                `img[alt="marcador${event.currentTarget.parentElement.parentElement.id}"]`
              )
              .click();
            console.log(origem);
          }}
        >
          Ver trajeto
        </button>
      </div>
    </div>
  );
};

export default Card;
