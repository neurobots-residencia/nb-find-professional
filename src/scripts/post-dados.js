import axios from "axios";

const postData = async (dados) => {
  try {
    const urlDaAPI = 'https://api-clinics.rj.r.appspot.com/patient';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resposta = await axios.post(urlDaAPI, dados, config);
    console.log('Resposta da API:', resposta.data);
  } catch (erro) {
    console.error('Erro ao enviar dados para a API:', erro);
  }
}

export default postData;