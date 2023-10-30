import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function CadastroPaciente(){ 
    const navigate = useNavigate();
    const trocarTela = () => navigate('/cadastroLocalizacao');

    const{register, formState: {erros}} = useForm();
    return (
        <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
            <div className=" flex justify-center items-center h-screen ">
                <form className=" w-96 p-7 bg-slate-100 h-96 flex flex-col gap-4 ">
                    <label className="text-2xl">Informações do paciente</label>
                    <div className=" flex gap-6">
                        <input placeholder="Nome*"  {...register("nome")} className="border-black border w-36 h-10"  type = "text"/>
                        <input placeholder="Whatsapp*"  {...register("whatsapp")} className="border-black border  w-36 h-10" type = "text"/>
                    </div>
                    <input placeholder="email" className="border-black border h-10" type="text" />
                    <label className="text-2xl">Informações do AVC</label>
                    <div className=" flex gap-6">
                        <select  className="border-black border w-36 h-10"  {...register("historicoAVC")} >
                            <option disabled selected>Tem AVC na família?</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                        <select className="border-black border  w-36 h-10"  {...register("valorInvestimento")}> 
                            <option>Qual valor de investimento?</option>
                            <option>Não tenho valor para investir</option>
                            <option>R$ 500 a R$1000</option>
                            <option>R$ 1000 a R$1500</option>
                            <option>R$ 1600 a R$2500</option>
                            <option>Acima de R$2500</option>
                        </select>
                    </div>
                    <input placeholder="Possui outra condição que não seja AVC? Qual?" className="border-black border h-10 " type="text" />
                    <button onClick={trocarTela}  className="border-black border   h-10">
                        Concluir
                    </button>
                    


                </form>  
            </div>
         </div>
    ) 
 }
 