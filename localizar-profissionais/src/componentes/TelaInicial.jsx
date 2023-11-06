import minhaImagem from './assets/fundoTelaInicial.jpg'
import { useNavigate } from "react-router-dom";
function TelaInicial() {
  const navigate = useNavigate();
  const trocarTela = () => navigate('/cadastroPaciente');
  return (
    <div className='bg-fundoTelaInicial'>
     
      <div >
        <h1 className='z-0'> de todos</h1>
        <p>A Neurobots existe para tornar a vida das pessoas
        melhor através da tecnologia. Tornamos acessíveis soluções eficientes e inovadoras em saúde.</p>
        <button onClick={trocarTela} >
          Procurar profissionais
        </button>
      </div>
    </div>
  )
}

export default TelaInicial;