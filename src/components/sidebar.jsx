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
    </div>
  );
}
