import { ArrowLeft, SunIcon } from "lucide-react";
import Map from "./mapa";
import Card from "./card";


import { useStore } from "../scripts/controlador-estados";
import { convertLength, getDistance } from "../scripts/distancia";

export default function TelaMapa(props) {
  const { data, origem } = useStore();

  const sortedData = [...data.map(d => ({
    ...d,
    distance: getDistance({
      position: {lat: origem[0], lng: origem[1]},
      destination: {
        lat: Number(d.lat),
        lng: Number(d.long)
      }
    })
  }))].sort((a,z) =>a.distance - z.distance)

  return (
    <div className="min-h-screen flex flex-col bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div className="px-6 py-5 flex items-center justify-between border-b  bg-slate-950 h-24">
        <div className="flex gap-4 items-center">
          <img
            className="h-10 pl-8 pr-3"
            src="/assets/neurobots_logo.png"
            alt="Logo Neurobots"
          ></img>
          <img
            className="w-56"
            src="/assets/neurobots_name.png"
            alt="Nome Neurobots"
          ></img>
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
        <p className=" text-4xl justify-center text-black font-semibold">
          Olá, Alice<span className="text-teal-300">{props.nome}</span>, aqui
          está a lista de profissionais mais próxima de você
        </p>
      </div>

      <main className="flex-1 p-6 flex gap-4 align-center">
        <div className="flex flex-col flex-1 gap-4 items-center h-[84vh] overflow-hidden">
          <div className="grid gap-2 overflow-y-scroll right-[-14px] relative px-30">
            {sortedData.map((data, index) => {
              return (
                <Card
                  key={data.email}
                  id={index}
                  clinica={data.clinica}
                  contato={data.contato}
                  email={data.email}
                  lat={Number(data.lat)}
                  lng={Number(data.long)}
                  distance={convertLength(data.distance)}
                  endereco_atendimento={data.endereco_atendimento}
                />
              );
            })}
          </div>
        </div>
        <div className="items-center relative w-3/6 flex flex-col gap-4">
          <button
            className="m-auto w-38 h-8 px-1.5 bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded"
            onClick={() => {
              const descRota = document.querySelector(
                ".leaflet-routing-alternatives-container"
              );
              if (descRota.classList.contains("hidden")) {
                descRota.classList.remove("hidden");
              } else {
                descRota.classList.add("hidden");
              }
            }}
          >
            Esconder descrição da rota
          </button>
          <Map />
        </div>
      </main>
    </div>
  );
}
