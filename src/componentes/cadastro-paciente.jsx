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
          className="w-cardPac h-cardPac p-12 bg-white flex flex-col gap-8 rounded-md "
        >
          <label className="text-2xl font-bold">Informações do paciente</label>
          <div className=" flex gap-6">
            <input
              id='nome'
              placeholder="Nome*"
              {...register("nome", {
                required: "Campo obrigatório",
                pattern: {
                  value: "",
                  message: "Nome inválido",
                },
              })}
              className="outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 "
              type="text"
            />
            {errors.nome && (
              <p className="text-red-500">{errors.nome.message}</p>
            )}
            <input
            id='whatsapp'
              placeholder="whatsapp*"
              {...register("whatsapp", {
                required: "Campo obrigatório",
                pattern: {
                  value: "",
                  message: "Número inválido",
                },
              })}
              className="outline-azulEscuro placeholder-gray-500 p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm"
              type="text"
            />
            {errors.whatsapp && (
              <p className="text-red-500">{errors.whatsapp.message}</p>
            )}
          </div>
          <input
            id='email'
            placeholder="Email*"
            className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400"
            type="email"
            {...register("email", {
              required: "Campo obrigatório",
              pattern: {
                value: "",
                message: "Email inválido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="text-2xl font-bold">Informações do AVC</label>
          <div className=" flex gap-6">
            {/* <select
              className="outline-azulEscuro p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm "
              {...register("historicoAVCFamilia", { required: true })}
            >
              {errors.historicoAVCFamilia && (
                <p className="text-red-500">
                  {errors.historicoAVCFamilia.message}
                </p>
              )}
              <option disabled selected></option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <select
              className="outline-azulEscuro p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm"
              {...register("valorInvestir", { required: true })}
            >
              <option disabled selected className="placeholder-gray-500">
                Qual valor de investimento?
              </option>
              <option>Não tenho valor para investir</option>
              <option>R$ 500 a R$1000</option>
              <option>R$ 1000 a R$1500</option>
              <option>R$ 1600 a R$2500</option>
              <option>Acima de R$2500</option>
            </select> */}

            <Controller
              name="historicoAVCFamilia"
              defaultValue = ""
              control={control}
              rules={{ required: "Por favor, selecione uma opção" }}
              render={({ field }) => (
                <select {...field} id='historicoAVCFamilia'>
                  <option value="" disabled hidden>
                    Você tem AVC na familia?
                  </option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              )}
            />
            {errors.historicoAVCFamilia && (
              <p className="text-red-500">
                {errors.historicoAVCFamilia.message}
              </p>
            )}
            <Controller
              name="valorInvestir"
              defaultValue = ""
              control={control}
              rules={{ required: "Por favor, selecione um valor a investir" }}
              render={({ field }) => (
                <select {...field} id='valorInvestir'>
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
              <p className="text-red-500">{errors.valorInvestir.message}</p>
            )}
          </div>
          <input
            id="outraCondicao"
            placeholder="Possui outra condição que não seja AVC? Qual?"
            className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400"
            type="text"
            {...register("outraCondicaoSaude", {
              required: "Campo obrigatório",
              pattern: {
                value: "",
                message: "Número inválido",
              },
            })}
          />
          {errors.outraCondicaoSaude && (
            <p className="text-red-500">{errors.outraCondicaoSaude.message}</p>
          )}
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
