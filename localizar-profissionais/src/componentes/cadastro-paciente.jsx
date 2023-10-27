import { useNavigate } from "react-router-dom";
export default function CadastroPaciente(){ 
    const navigate = useNavigate();
    const trocarTela = () => navigate('/cadastroLocalizacao');
    return (
        <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
            <div className=" flex justify-center items-center h-screen ">
                <section className=" w-96 p-7 bg-slate-100 h-96 flex flex-col gap-4 ">
                    <h2 className="text-2xl">Sobre paciente</h2>
                    <div className=" flex gap-6">
                        <input placeholder="Nome" className="border-black border w-36 h-10"  type = "text"/>
                        <input placeholder="Whatsapp" className="border-black border  w-36 h-10" type = "text"/>
                    </div>
                    <input placeholder="email" className="border-black border h-10" type="text" />
                    <h2 className="text-2xl">Sobre o AVC</h2>
                    <div className=" flex gap-6">
                        <select  className="border-black border w-36 h-10" >Famíliar que tenha AVC?
                            <option>Famíliar que tenha AVC?</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                        <select className="border-black border  w-36 h-10"> Qual valor de investimento?
                            <option>Qual valor de investimento?</option>
                            <option>R$ 1000</option>
                            <option>R$ 2000</option>
                            <option>R$ 3000</option>
                        </select>
                    </div>
                    <input placeholder="Possui outra condição que não seja AVC? Qual?" className="border-black border h-10 " type="text" />
                    <button onClick={trocarTela}  className="border-black border   h-10">
                        Concluir
                    </button>
                    


                </section>  
            </div>
         </div>
    ) 
 }
 