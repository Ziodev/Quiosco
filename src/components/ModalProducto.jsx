import { useState } from "react";
import { useQuiosco } from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function ModalProducto() {
  const { producto, handleClickModal } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen ${producto.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end mb-5">
          <button
            type="button"
            className="p-2 text-red-500 rounded-full"
            onClick={handleClickModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-black mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
        <div className="flex items-center gap-4 mt-5">
          <p className="text-2xl font-bold text-amber-500">Cantidad:</p>
          <button
            type="button"
            onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
            className="text-2xl font-bold text-amber-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <p className="text-3xl font-bold text-amber-500">{cantidad}</p>
          <button
            type="button"
            onClick={() => setCantidad(cantidad < 5 ? cantidad + 1 : 5)}
            className="text-2xl font-bold text-amber-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow transition-colors duration-200 mt-5"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  );
}
