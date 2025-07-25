import Categoria from "./categoria";
import { categorias } from "../data/categorias";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="md:w-72">
      <div className="p-4">
        <img 
        src="/img/logo.svg" 
        alt="logo" 
        className="w-32" />
      </div>
      <div className="mt-10">
        {
            categorias.map( categoria =>(
            <Categoria 
            key={categoria.id}
            categoria={categoria}
            />
            ))
        }
      </div>
      <div className="my-5 p-5">
        <button className="bg-red-700 w-full py-3 text-white font-bold uppercase rounded text-center hover:bg-red-800 transition-colors cursor-pointer">Cancelar orden</button>
      </div>
    </div>
  );
}
