import React from "react";
import { useStore } from "../scripts/controlador-estados";

const Card = (props) => {

  const { idMarcador, selectMarker } = useStore();

  return ( // Estilo quando em foco pelo click do marcador está após ? e o estilo quando perder o foco após :
    <div className=" w-card p-1 border flex flex-row justify-evenly rounded-lg border-gray-600 placeholder-gray-500" id={props.id}>
      <div className="flex flex-col min-w-min max-w-xs gap-1">
        <div className="flex text-center gap-4 py-4">
         <img className="h-8"src="/assets/neurobots_logo.png" alt="Logo Neurobots"></img>
          <h1 className="font-bold text-lg py-1 text-indigo-950"> {props.clinica} </h1>
        </div>
        <span className="font-semibold">
          {props.endereco_atendimento}
        </span>
        <div>Telefone: {props.contato} </div>
        <div>Email: {props.email}</div>
        <div>Distancia: {props.distancia}</div>
        <button  className="m-4 w-32 h-8 ml-20  bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded"
          onClick={(event) => {
            console.log(event.currentTarget.parentElement.parentElement.id)
            console.log(event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement)
          }
          }>
           Ver trajeto
        </button>
      </div>

    </div>
  );
}

export default Card