import { useQuiosco } from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";
import ResumenProducto from "./ResumenProducto";
export default function resumen() {
  const {pedido} = useQuiosco();
  return (
    <aside className='w-72 h-screen border-gray-200 overflow-y-scroll p-4'>
        <h1 className='text-4xl font-black'>Mi pedido</h1>
        <p className='text-lg my-5'>Aquí podrás revisar tu pedido</p>
        <div className="py-10">
          {pedido.length === 0 ? (
            <p className="text-center text-2xl">No hay elementos en tu pedido</p>
          ) : (
            pedido.map(producto => (
              <ResumenProducto 
              key={producto.id} 
              producto={producto} 
              />
            ))
          )}
        </div>
        <p className="text-lg mt-10">Total a pagar:</p>
        <form className="w-full">
          <div className="mt-5">
          <input 
          type="submit" 
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-md cursor-pointer transition-colors duration-200" 
          value="Confirmar pedido" />
          </div>
        </form>
    </aside>
  )
}
