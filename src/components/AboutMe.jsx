import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import ImgPerfil from '../assets/perfil.jpg';

export default function AboutMe() {
  const param1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum pharetra tortor, vitae blandit leo luctus ut. Maecenas odio tellus, imperdiet consectetur nulla nec, elementum sodales nunc. Quisque accumsan ullamcorper quam, non dapibus felis euismod ac. Vestibulum congue tortor in tellus gravida mattis. Nulla a diam sit amet neque tempus euismod. Suspendisse maximus massa vel lacus placerat ornare. Etiam sit amet varius ligula. Mauris facilisis tellus libero, id aliquet nibh scelerisque quis. Nulla facilisi. Ut venenatis fermentum dapibus.';
  const param2 = 'Quisque vel risus in nulla pretium dictum. Duis eu fermentum quam. Nunc lacinia hendrerit mi, a pharetra metus laoreet ac. Morbi eget est aliquet, aliquam leo a, semper eros. Vestibulum metus nisi, mollis et consectetur ac, dictum nec est.';

  return (
    <div>
      <div
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:flex ">
          <div className="flex items-center p-8 justify-center w-full md:w-1/2 lg:w-1/3">
            <img
              className="w-full h-full object-cover"
              src={ImgPerfil}
              alt="Perfil Leonardo"
            />
          </div>
          <div className="text-white w-full md:w-1/2 lg:w-2/3 px-6 pt-6 pb-2">
            <p className="py-2 px-1">{param1}</p>
            <p className="py-2 px-1">{param2}</p>
            <div className="flex p-3 gap-5 text-2xl">
              <BsLinkedin
                className="cursor-pointer"
              />
              <BsGithub
                className="cursor-pointer"
              />
              <BsInstagram
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-9 flex justify-center">
            <button
              className="text-white bg-main p-2 flex items-center gap-2 hover:text-black hover:bg-white transition-colors shadow-white hover:shadow-black shadow"
              type="button"
            >
              <MdOutlineMailOutline />
              Envíame un Email
            </button>
        </div>
      </div>
    </div>
  );
}
