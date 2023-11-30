import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CadastroLocalizacao() {
  const navigate = useNavigate();
  const trocarTela = () => navigate('/localizacaoProfissionais');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    trocarTela();
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          register("cidade").setValue(data.localidade);
          register("rua").setValue(data.logradouro);
        });
    }
  };

  return (
    <div className="bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-7 bg-slate-100 h-96 flex flex-col gap-4">
          <label className="text-2xl">Localização </label>
          <div className="flex flex-col gap-6">
            <input
              placeholder="CEP*"
              className={`border-black border h-10 ${errors.cep ? "border-red-500" : ""}`}
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
              placeholder="Cidade"
              className={`border-black border h-10 ${errors.cidade ? "border-red-500" : ""}`}
              type="text"
              {...register("cidade")}
            />
            {errors.cidade && <p className="text-red-500">{errors.cidade.message}</p>}

            <input
              placeholder="Rua"
              className={`border-black border h-10 ${errors.rua ? "border-red-500" : ""}`}
              type="text"
              {...register("rua")}
            />
            {errors.rua && <p className="text-red-500">{errors.rua.message}</p>}
          </div>

          <div className="flex gap-4">
            <select className={`border-black border w-38 h-10 ${errors.distanciaDesejada ? "border-red-500" : ""}`} {...register("distanciaDesejada", { required: "Selecione a distância desejada" })}>
              <option disabled value="">Distância máxima desejada</option>
              <option value="1km">1Km</option>
              <option value="5km">5Km</option>
              <option value="10km">10Km</option>
            </select>
            {errors.distanciaDesejada && <p className="text-red-500">{errors.distanciaDesejada.message}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}