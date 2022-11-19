import React, { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi'

export default function Navbar() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const setFalseShow = () => {
    setShow(false);
  }

  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex justify-between px-6 py-3 max-w-7xl mx-auto items-center">
        <span className={`font-extrabold text-xl z-30 ${show && 'text-white'} transition-colors delay-700`}>LeonardoTorre</span>
        <ul className={`flex gap-3 fixed md:static visible text-white md:text-black bg-black md:bg-transparent w-full md:w-auto h-full md:h-auto flex-col md:flex-row p-4 md:px-0 items-center md:items-start justify-center text-2xl md:text-lg z-20 transition-all duration-700 left-0 ${show ? 'top-0' : 'top-1/4'} ${show ? 'opacity-100' : 'opacity-0 invisible'} md:visible md:opacity-100`}>
          <li
            onClick={setFalseShow}
          >
            Acerca de
          </li>
          <li
            onClick={setFalseShow}
          >
            Proyectos
          </li>
          <li
            onClick={setFalseShow}
          >
            Galería
          </li>
          <li
            onClick={setFalseShow}
          >
            Contacto
          </li>
        </ul>
        <BiMenuAltRight
          onClick={toggleShow}
          className={`z-30 ${show && 'text-white'} transition-colors delay-700 text-4xl md:hidden`}
        />
      </nav>
    </header>
  )
}






