import React from 'react'
import Canva from './Canva'

export default function Jumbotron() {
  return (
    <div className="flex flex-col  md:flex-row p-6 h-600px md:h-[50vh] md:min-h-[600px] mx-auto max-w-7xl items-center">
      <div className="p-4 w-full">
        <h1 className="font-extrabold text-3xl">LeonardoTorre</h1>
        <h2 className="font-bold opacity-70 xl mb-6">Diseñador Web</h2>
        <p className="text-base">Creación de páginas web. Diseños modernos y personalizados para cada gusto</p>
      </div>
      <Canva />
    </div>
  )
}
