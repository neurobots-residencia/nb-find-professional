
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TelaInicial from "./componentes/tela-inicial";
import CadastroPaciente from './componentes/cadastro-paciente';
import CadastroLocalizacao from './componentes/cadastro-localizacao';
import TelaMapa from './componentes/localizacao-profissionais'
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<TelaInicial />} />
            <Route exact path='/cadastroPaciente' element={<CadastroPaciente/>} />
            <Route exact path='/cadastroLocalizacao' element={<CadastroLocalizacao />} />
            <Route exact path='/localizacaoProfissionais' element={<TelaMapa />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
