import { ArrowLeft, SunIcon } from "lucide-react";
import Map from "./mapa";
import Card from "./card";
import { useEffect } from "react";
import postData from "../scripts/post-dados";
import { useStore } from "../scripts/controlador-estados";
import { useNavigate } from "react-router-dom";


export default function TelaMapa() {

  const navigate = useNavigate();

  const {
    data,
    
    name,
    email,
    whatsapp,
    state,
    city,
    hasAvc,
    hasAnotherCondition,
    investmentAmount,
    
    fetch,
    armazenaName,
    armazenaOrigem,

  } = useStore();

  useEffect(() => {
    fetch()
    armazenaName(sessionStorage.getItem("name"));
    armazenaOrigem(sessionStorage.getItem("lat"), sessionStorage.getItem("lng"));
    const hasAvcBool = hasAvc === "sim" ? true : false;
    const postDataArray = [
      name,
      email,
      whatsapp,
      state,
      city,
      hasAvcBool,
      hasAnotherCondition,
      investmentAmount
    ]
    postData(postDataArray);
    console.log('opca')
  }, [])
  
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
      </div>

      <div className="flex items-center indent-80">
        <a 
        className="m-3 cursor-pointer"
        onClick={() => {
          navigate("/cadastroLocalizacao")
          console.log('teste')
        }}
        >
          <ArrowLeft size={40} />
        </a>
        <p className="text-4xl justify-center text-black font-semibold lg:text-3xl lg:indent-32 md:text-2xl md:indent-16 sm:text-xl sm:indent-10">
          Olá <span className="text-teal-300">{name}</span>, aqui está a lista de profissionais mais próxima de você
        </p>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4 items-center h-[60vh] overflow-hidden">
          <div className="grid gap-2  overflow-y-scroll right-[-30px] relative overflow-hidden">
            {data.map((data, index) => {
              return (
                <Card
                  key={index}
                  id={index}
                  clinica={data.clinica}
                  contato={data.contato}
                  email={data.email}
                  endereco_atendimento={data.endereco_atendimento}
                />
              );
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
