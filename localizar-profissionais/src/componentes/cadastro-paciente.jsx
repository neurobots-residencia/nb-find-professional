import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function CadastroPaciente(){ 
    const navigate = useNavigate();
    const trocarTela = () => navigate('/cadastroLocalizacao');

    const{register, formState: {erros}} = useForm();
    return (
        <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
            <div className=" flex justify-center items-center h-screen font-poppins">
                
                <form className="w-cardPac h-cardPac p-12 bg-white flex flex-col gap-8 rounded-md ">
                    <label className="text-2xl font-bold">Informações do paciente</label>
                    <div className=" flex gap-6">
                        <input placeholder="Nome*"  {...register("nome")} className="outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 "  type = "text"/>
                        <input placeholder="Whatsapp*"  {...register("whatsapp")} className= "outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm" type = "text"/>
                    </div>
                    <input placeholder="Email" className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400" type="text" />
                    <label className="text-2xl font-bold">Informações do AVC</label>
                    <div className=" flex gap-6">
                        <select  className="outline-azulEscuro p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm "  {...register("historicoAVC")} >
                            <option disabled selected>Tem AVC na família?</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                        <select className="outline-azulEscuro p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm"  {...register("valorInvestimento")}> 
                            <option disabled selected className="placeholder-gray-500">Qual valor de investimento?</option>
                            <option>Não tenho valor para investir</option>
                            <option>R$ 500 a R$1000</option>
                            <option>R$ 1000 a R$1500</option>
                            <option>R$ 1600 a R$2500</option>
                            <option>Acima de R$2500</option>
                        </select>
                    </div>
                    <input placeholder="Possui outra condição que não seja AVC? Qual?" className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400" type="text" />
                    <div className="flex justify-center">
                        <button onClick={trocarTela}  className=" w-32 h-10 delay-300 bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded ">
                            Avançar
                        </button>
                       
                    </div>


                </form>  
            </div>
         </div>
    ) 
 }
 