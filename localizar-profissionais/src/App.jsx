import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TelaInicial from "./componentes/TelaInicial";
import CadastroPaciente from "./componentes/CadastroPaciente";
import CadastroLocalizacao from "./componentes/CadastroLocalizacao";
import LocalizacaoProfissionais from "./componentes/TelaPrincipal/LocalizacaoProfissionais"
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<TelaInicial />} />
            <Route exact path='/cadastroPaciente' element={<CadastroPaciente/>} />
            <Route exact path='/cadastro' element={<CadastroLocalizacao />} />
            <Route exact path='/profissionais' element={<LocalizacaoProfissionais />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
