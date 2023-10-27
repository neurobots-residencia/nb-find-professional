import { useNavigate } from "react-router-dom";
import { useForm, useController } from "react-hook-form";

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
                    <input className="border-black border h-10" type="text" {...register("cep")} onBlur= {checkCEP}/>
                    <div className=" flex gap-6">
                        <input className="border-black border w-36 h-10"type = "text" {...register("estado")}/>
                        <input  className="border-black border  w-36 h-10" type = "text" {...register("cidade")}/>
                    </div>
                    <div className=" flex gap-6">
                        <input className="border-black border w-36 h-10" type = "number" {...register("distancia")}/>
                        <input  className="border-black border  w-36 h-10" type = "text" {...register("rua")}/>
                    </div>
                    <button onClick={trocarTela}  className="border-black border   h-10">
                        Concluir
                    </button>
                </form> 
            </div>
         </div>
    ) 
 }
 