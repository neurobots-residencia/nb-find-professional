import { Redo2 } from "lucide-react";
import React from "react";

export default function Card() {
  return (
    <div className=" bg-slate-200 p-2 border flex flex-row justify-evenly rounded-lg border-black">
      <div className="flex flex-col min-w-min max-w-xs">
        <h1 className="font-bold text-lg">Nome</h1>
        <span className="font-semibold">
          Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre
          Sobre Sobre Sobre Sobre Sobre
        </span>
      </div>
      <div className="flex flex-col m-5">
        <div>Telefone: </div>
        <div>Email</div>
        <div>Distancia</div>
        <Redo2 size={25} />
      </div>
    </div>
  );
}
