import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#001224] w-full flex flex-col py-12">
      <div className="flex flex-col md:flex-row justify-center px-10 text-gray-400">
        <div className="flex flex-col w-80 m-4">
          <h3 className="text-2xl text-white mb-2">Kapcsolat</h3>
          <p className="">Keszthelyi József Attila Vitorlás Sportegyesület</p>
          <p className="">H-8360 Keszthely, Vitorlás sétány 3795/13</p>
          <p className="">Telefon: +36 ?? ?? ???</p>
          <p className="">E-mail:</p>
        </div>
        <div className="flex flex-col w-60 md:ms-7 m-4">
          <h3 className="text-2xl text-white mb-2">Kikötőmester</h3>
          <p className=" font-bold">Mikus Gábor</p>
          <p className="">Telefon: +36 ?? ?? ???</p>
          <p className="">E-mail: </p>
        </div>
        <div className="flex flex-col w-60 m-4">
          <h3 className="text-2xl  text-white mb-2">Információk</h3>
          <p className="">Kikötőhelyek száma: 54</p>
          <p className="">Vendéghelyek száma: 5</p>
          <p className="">Szabad hely: 0</p>
        </div>
        <div className="flex flex-col w-80 m-4">
          <h3 className="text-2xl text-white mb-2">Fókuszban</h3>
          <ul className="flex text-white flex-wrap">
            <li className="p-2 bg-blue-400 m-1">Vitorlázás</li>
            <li className="p-2 bg-blue-400 m-1">Balaton</li>
            <li className="p-2 bg-blue-400 m-1">Sport</li>
            <li className="p-2 bg-blue-400 m-1">Pihenés</li>
            <li className="p-2 bg-blue-400 m-1">Szórakozás</li>
            <li className="p-2 bg-blue-400 m-1">Közösség</li>
            <li className="p-2 bg-blue-400 m-1">Bár</li>
            <li className="p-2 bg-blue-400 m-1">Pacal</li>
          </ul>
        </div>
      </div>
      <hr className="w-3/5 m-auto my-5 opacity-80" />
      <p className="flex text-center m-auto text-gray-400">Minden jog fenntartva &copy; 2024 KJAVSE | Készítette: Rajkai Zoltán</p>
    </footer>
  );
};