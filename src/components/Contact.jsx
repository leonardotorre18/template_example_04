import React from 'react'

export default function Contact() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="font-bold text-center text-2xl text-white">Contacto</h2>
      <p className="text-center my-5 p-2 text-white">Envía tu nombre y email para ponernos en contacto.</p>
      <form
        onSubmit={handlerSubmit}
      >
        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea rows={6} placeholder="Mensaje" />
        </div>
        <div className="m-5 flex justify-center">
          <button
            className="w-fit px-6 py-4 bg-white transition-colors duration-150 hover:opacity-90"
            type="submit"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  )
}
