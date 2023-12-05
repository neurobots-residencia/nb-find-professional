import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useStore } from "../scripts/controlador-estados";

export default function CadastroPaciente() {
  
  const { 
    armazenaName, 
    armazenaWhatsapp, 
    armazenaEmail, 
    armazenaHasAvc, 
    armazenaHasAnotherCondition,
    armazenaInvestmentAmount 
  } = useStore();
  const navigate = useNavigate();
  const trocarTela = () => navigate("/cadastroLocalizacao");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    sessionStorage.setItem("name", document.querySelector('#nome').value)
    armazenaName(document.querySelector('#nome').value);
    armazenaWhatsapp(document.querySelector('#whatsapp').value);
    armazenaEmail(document.querySelector('#email').value);
    armazenaHasAvc(document.querySelector('#historicoAVCFamilia').value);
    armazenaHasAnotherCondition(document.querySelector('#outraCondicao').value)
    armazenaInvestmentAmount(document.querySelector('#valorInvestir').value);
    trocarTela();
  };
  
  return (
    <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
      <div className=" flex justify-center items-center h-screen font-poppins">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-cardPac h-cardPac p-12 bg-white flex flex-col gap-8 rounded-md sm:w-smFundoCard "
        >
          <label className="text-2xl font-bold">Informações do paciente</label>
          <div className=" flex gap-6">
            <input
              id='nome'
              placeholder="Nome*"
              {...register("nome", {
                required: "Nome obrigatório",
                pattern: {
                  value: "",
                  message: "Nome inválido",
                },
              })}
              className={`outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 ${errors.nome ? "placeholder:text-red-500" : ""}`}   
              type="text"
            />
            <input
            id='whatsapp'
              placeholder="whatsapp*"
              {...register("whatsapp", {
                required: "Número obrigatório",
                pattern: {
                  value: "",
                  message: "Número inválido",
                },
              })}
              className={`outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm ${errors.whatsapp ? "placeholder:text-red-500" : ""}`}
              type="text"
            />
          </div>
          <input
            id='email'
            placeholder="Email*"
            className={`outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400 ${errors.email ? "placeholder:text-red-500" : ""}`}
            type="email"
            {...register("email", {
              required: "Email obrigatório",
              pattern: {
                value: "",
                message: "Email inválido",
              },
            })}
          />
          <label className="text-2xl font-bold">Informações do AVC</label>
          <div className=" flex gap-6">
            <Controller
              name="historicoAVCFamilia"
              defaultValue = ""
              control={control}
              rules={{ required: "Por favor, selecione uma opção" }}
              render={({ field }) => (
                <select 
                  {...field} 
                  id='historicoAVCFamilia'
                  onClick={()=>{
                    if(document.querySelector('#historicoAVCFamilia').classList.contains('text-red-500')){
                      document.querySelector('#historicoAVCFamilia').classList.remove('text-red-500')
                    }
                  }}  
                > 
                  <option value="" disabled hidden>
                    Você tem AVC na familia?
                  </option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              )}
            />
            {errors.historicoAVCFamilia && (
              document.querySelector('#historicoAVCFamilia').classList.add('text-red-500')
            )}
            <Controller
              name="valorInvestir"
              defaultValue = ""
              control={control}
              rules={{ required: "Por favor, selecione um valor a investir" }}
              render={({ field }) => (
                <select 
                  {...field} 
                  id='valorInvestir'
                  onClick={()=>{
                    if(document.querySelector('#valorInvestir').classList.contains('text-red-500')){
                      document.querySelector('#valorInvestir').classList.remove('text-red-500')
                    }
                  }}
                >
                  <option value="" disabled hidden>
                    Não tenho valor para investir
                  </option>
                  <option>R$ 500 a R$1000</option>
                  <option>R$ 1000 a R$1500</option>
                  <option>R$ 1600 a R$2500</option>
                  <option>Acima de R$2500</option>
                </select>
              )}
            />
            {errors.valorInvestir && (
              document.querySelector('#valorInvestir').classList.add('text-red-500')
            )}
          </div>
          <input
            id="outraCondicao"
            placeholder="Possui outra condição que não seja AVC? Qual?"
            className={`outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400 ${errors.outraCondicaoSaude ? "placeholder:text-red-500" : ""}`}
            type="text"
            {...register("outraCondicaoSaude", {
              required: "Campo obrigatório",
              pattern: {
                value: "",
                message: "Número inválido",
              },
            })}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-32 h-10 delay-300 bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded "
            >
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
