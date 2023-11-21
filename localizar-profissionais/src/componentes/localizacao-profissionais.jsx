import { ArrowLeft, SunIcon } from "lucide-react";
import Map from "./mapa";
import Card from "./card";
// import axios from "axios";

import { useStore } from "../scripts/controlador-estados";

export default function TelaMapa(props) {

  const { data } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div className="px-6 py-5 flex items-center justify-between border-b  bg-slate-950 h-24">
        <div className="flex gap-4 items-center">
          <img className="h-10 pl-8 pr-3"src="/assets/neurobots_logo.png" alt="Logo Neurobots"></img>
          <img className = "w-56" src="/assets/neurobots_name.png" alt="Nome Neurobots" ></img>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white">
            <SunIcon size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center indent-80">
        <a className="m-3">
          <ArrowLeft size={40} />
        </a>
        <p className="text-4xl justify-center text-black font-semibold">
          Olá <span className="text-teal-300">{props.nome}</span>, aqui está a lista de profissionais mais próxima
          de você
        </p>
      </div>

      <main className="flex-1 p-6 flex gap-6">  
        <div className="flex flex-col flex-1 gap-4 items-center h-[60vh] overflow-hidden">
          <div className="grid gap-2  overflow-y-scroll right-[-30px] relative">
          {data.map((data, index) =>{
            return <Card 
            key={index} 
            id={index}
            clinica={data.clinica} 
            contato={data.contato} 
            email={data.email}
            endereco_atendimento={data.endereco_atendimento}
            />
           })}  
          </div>
        </div>
        <div className="items-center relative w-3/6">
          <Map />
        </div>
      </main>
    
    </div>
  );
}