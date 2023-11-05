import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ValidacaoFormPaciente() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const trocarTela = () => navigate('/cadastroLocalizacao');

  const onSubmit = (data) => {
    // Aqui você pode processar os dados do paciente
    console.log(data);

    // Navegue para a próxima página após o envio do formulário
    trocarTela();
  };

  return (
    <div className="bg-telaInicial min-h-screen bg-no-repeat bg-cover bg-center bg-fixed sm:max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-full">
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-96 p-7 bg-slate-100 h-96 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-2xl">Informações do paciente</label>
          <div className="flex gap-6">
            <input
              placeholder="Nome*"
              {...register("nome", { required: "Nome é obrigatório" })}
              className={`border-black border w-36 h-10 ${
                errors.nome ? "border-red-500" : ""
              }`}
              type="text"
            />
            <input
              placeholder="Whatsapp*"
              {...register("whatsapp", { required: "Whatsapp é obrigatório" })}
              className={`border-black border w-36 h-10 ${
                errors.whatsapp ? "border-red-500" : ""
              }`}
              type="text"
            />
          </div>
          {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
          {errors.whatsapp && (
            <p className="text-red-500">{errors.whatsapp.message}</p>
          )}
          <input placeholder="email" {...register("email")} className="border-black border h-10" type="text" />
          <label className="text-2xl">Informações do AVC</label>
          <div className="flex gap-6">
            <select
              {...register("historicoAVC", { required: "Selecione uma opção" })}
              className={`border-black border w-36 h-10 ${
                errors.historicoAVC ? "border-red-500" : ""
              }`}
            >
              <option value="" disabled>Tem AVC na família?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <select
              {...register("valorInvestimento", { required: "Selecione uma opção" })}
              className={`border-black border w-36 h-10 ${
                errors.valorInvestimento ? "border-red-500" : ""
              }`}
            >
              <option value="">Qual valor de investimento?</option>
              <option value="Não tenho valor para investir">Não tenho valor para investir</option>
              <option value="R$ 500 a R$1000">R$ 500 a R$1000</option>
              <option value="R$ 1000 a R$1500">R$ 1000 a R$1500</option>
              <option value="R$ 1600 a R$2500">R$ 1600 a R$2500</option>
              <option value="Acima de R$2500">Acima de R$2500</option>
            </select>
          </div>
          {errors.historicoAVC && (
            <p className="text-red-500">{errors.historicoAVC.message}</p>
          )}
