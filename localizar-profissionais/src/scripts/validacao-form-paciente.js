import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ValidacaoFormPaciente() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const trocarTela = () => navigate('/cadastroLocalizacao');

  const onSubmit = (data) => {
    console.log(data);

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
          
