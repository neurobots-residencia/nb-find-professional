import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CadastroLocalizacao(){ 
    const navigate = useNavigate();
    const trocarTela = () => navigate('/localizacaoProfissionais');

    const{register, handleSubmit, setFocus, setValue, formState: {erros}} = useForm()
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
        .then(data => {
          setValue('estado', data.uf);
          setValue('cidade', data.localidade);
          setValue('rua', data.logradouro);
          setFocus('distancia');
        })
        
    }

    return (
        <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
            <div className=" flex justify-center items-center h-screen ">
            
                <form onSubmit = {handleSubmit} className=" w-96 p-7 bg-slate-100 h-96 flex flex-col gap-4 ">
                    <label className="text-2xl">Localização </label>
                    <div className="flex flex-col gap-6 ">
                    <input placeholder="CEP*"  className="border-black border h-10" type="text" {...register("cep")} onBlur= {checkCEP}/>
                        <input placeholder="Cidade" className="border-black border h-10" type = "text" {...register("cidade")}/>
                        <input placeholder="Rua" className="border-black border h-10" type = "text" {...register("rua")}/>
                    </div>
                    <div className=" flex gap-4">
                    <select className="border-black border w-38 h-10" {...register("distanciaDesejada")}>
                        <option disabled selected>Distância máxima desejada</option>
                        <option value="1km">1Km</option>
                        <option value="4km">5Km</option>
                        <option value="10km">10Km</option>
                    </select>
                        <input placeholder="Estado" className="border-black border w-24 h-10"type = "text" {...register("estado")}/>
                    </div>
                    <button onClick={trocarTela}  className="border-black border h-10">
                        Concluir
                    </button>
                </form> 
            </div>
         </div>
    ) 
 }
 