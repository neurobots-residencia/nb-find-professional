
import { useNavigate } from "react-router-dom";
function TelaInicial() {
  const navigate = useNavigate();
  const trocarTela = () => navigate('/cadastroPaciente');
  return (
    <div className=" bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full  md:max-w-5xl lg:max-w-6xl xl:max-w-full ">
        <div className="w-3/6 flex flex-col h-screen ml-24 justify-center text-white gap-8 font-bold font-poppins  ">
          <h1 className="text-6xl" > Tecnologia e saúde ao alcance de todos</h1>
          <p className="text-2xl">A Neurobots existe para tornar a vida das pessoas
          melhor através da tecnologia. Tornamos acessíveis soluções eficientes e inovadoras em saúde.</p>
          <button  onClick={trocarTela} className= " bg-corAzul px-16 py-5 rounded-full w-1/2 items-center text-white text-lg hover:bg-azulEscuro ease-linear duration-300" >
            Procurar profissionais
          </button>
        </div>
    </div>
  )
}
export default TelaInicial;