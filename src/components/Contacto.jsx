import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };
  //   cuando enviamos con "onSubmit={handleSubmit(enviar)}" recibimos una "data"/un objeto. con la info de "nombre", "email" suministrado por (register)

  //
  //necesito aprender a validar los dato
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        {/* onSubmit={handleSubmit(enviar)}> */}

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="text"
          placeholder="Ingresa tu e-mail"
          {...register("email")}
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
