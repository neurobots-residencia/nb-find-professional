import { Redo2 } from "lucide-react";
import React from "react";

const chamaMarcador = (event) => {
  console.log(event.currentTarget.id)
}

const Card = (props) => {

  return (
    <div className=" bg-slate-200 p-2 border flex flex-row justify-evenly rounded-lg border-black" id={props.id} onClick={chamaMarcador}>
      <div className="flex flex-col min-w-min max-w-xs">
        <h1 className="font-bold text-lg">{props.clinica}</h1>
        <span className="font-semibold">
          {props.endereco_atendimento}
        </span>
      </div>
      <div className="flex flex-col m-5"  >
        <div>Telefone: {props.contato} </div>
        <div>Email: {props.email}</div>
        <div>Distancia: {props.distancia}</div>
        <Redo2 size={25} />
      </div>
    </div>
  );
}

export default Card