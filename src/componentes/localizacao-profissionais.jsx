import { ArrowDownCircle, ArrowLeft, SunIcon } from "lucide-react";
import Map from "./mapa";
import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TelaMapa(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api-clinics.rj.r.appspot.com/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação: ", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neuroback bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div className="px-6 py-5 flex items-center justify-between border-b  bg-slate-950 h-28">
        <div className="flex flex-row flex-nowrap items-center">
          <img className="h-10 pl-8 pr-3"src="/assets/neurobots_logo.png" alt="Logo Neurobots"></img>
          <img className = "w-64" src="/assets/neurobots_name.png" alt="Nome Neurobots" ></img>
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
          <div className="grid gap-4 flex overflow-y-scroll right-[-30px] relative">
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
          <button>
            <ArrowDownCircle size={30} />
          </button>
        </div>
        <div className="items-center relative w-1/4">
          <Map />
        </div>
      </main>
      <div className="p-10 flex items-center justify-center">
        <button className="bg-emerald-500 px-16 py-5 rounded-full items-center text-white text-lg hover:bg-emerald-400 ">
          Concluir
        </button>
      </div>
    </div>
  );
}