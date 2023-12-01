import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStore } from "../scripts/controlador-estados";

export default function CadastroLocalizacao() {
  const navigate = useNavigate();
  const trocarTela = () => navigate("/localizacaoProfissionais");
  const {
    armazenaCity,
    armazenaState,
    fetchLatLong
  } = useStore();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    armazenaCity(document.querySelector('#cidade').value);
    armazenaState(document.querySelector('#estado').value);
    fetchLatLong(document.querySelector('#cep').value);
    trocarTela();
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      fetch(`https://api-clinics.rj.r.appspot.com/cep/${cep}`)
        .then((response) => response.json())
        .then((data) => {
          setValue("estado", data.uf);
          setValue("cidade", data.localidade);
          setValue("rua", data.logradouro);
          setFocus("distancia");
        });
    }
  };

  return (
    <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
      <div className=" flex justify-center items-center h-screen font-poppins">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-fundoCard h-fundoCard p-12 bg-white flex flex-col gap-8 rounded-md "
        >
          <label className="text-2xl font-bold mt-6">Localização </label>
          <div className="flex flex-col gap-6">
            <input
              id="cep"
              placeholder="CEP*"
              className={`outline-azulEscuro placeholder-gray-500 border p-6  h-14 rounded border-gray-400 ${errors.cep ? "border-red-500" : ""
                }`}
              type="text"
              {...register("cep", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\d{8}$/,
                  message: "CEP inválido",
                },
              })}
              onBlur={checkCEP}
            />
            {errors.cep && <p className="text-red-500">{errors.cep.message}</p>}

            <input
              id="cidade"
              placeholder="Cidade"
              className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400"
              type="text"
              {...register("cidade")}
            />

            <input
              placeholder="Rua"
              className="outline-azulEscuro placeholder-gray-500 p-6 border h-14 rounded border-gray-400"
              type="text"
              {...register("rua")}
            />
            {errors.rua && <p className="text-red-500">{errors.rua.message}</p>}
          </div>

          <div className=" flex gap-4">
            <select
              className={`outline-azulEscuro p-4 w-64 border h-14 rounded border-gray-400 mr-0.5 text-sm ${errors.distanciaDesejada ? "border-red-500" : ""
                }`}
              {...register("distanciaDesejada", {
                required: "Selecione a distância desejada",
              })}
            >
              <option disabled selected>
                Distância máxima desejada
              </option>
              <option value="1km">1Km</option>
              <option value="4km">5Km</option>
              <option value="10km">10Km</option>
            </select>
            {errors.distanciaDesejada && (
              <p className="text-red-500">{errors.distanciaDesejada.message}</p>
            )}

            <input
              id="estado"
              placeholder="Estado"
              className="outline-azulEscuro placeholder-gray-500 p-6 w-52 border h-14 rounded border-gray-400"
              type="text"
              {...register("estado")}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-32 h-10  bg-corAzul hover:bg-azulEscuro ease-linear duration-300 font-bold text-white rounded "
            >
              Avançar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
