import { productos } from "../data/productos";
import { useQuiosco } from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";
export default function Producto({producto}) {
    const {nombre, imagen, precio} = producto;
    const {handleClickModal, handdleSetProducto} = useQuiosco();
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white via-amber-50 to-amber-100 hover:shadow-2xl transition-shadow duration-300">
        <img
            src={`/img/${imagen}.jpg`}
            alt={`Imagen ${nombre}`}
            className="w-full h-56 object-cover object-center transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6 flex flex-col items-center">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2 text-center drop-shadow-sm">{nombre}</h3>
            <p className="mt-3 font-black text-3xl text-amber-600 bg-white/70 px-4 py-2 rounded-lg shadow-inner">
                {formatearDinero(precio)}
            </p>
            <button
                className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow transition-colors duration-200"
                onClick={() => {
                    handleClickModal();
                    handdleSetProducto(producto);
                }}
            >
                Agregar al pedido
            </button>
        </div>
    </div>
  )
}
