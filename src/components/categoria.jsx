import { useQuiosco } from "../hooks/useQuiosco";

export default function categoria(props) {
  const {handleClickCategoria, categoriaActual} = useQuiosco();
  const {icono, nombre, id} = props.categoria;
  const resaltarCategoriaActual = () => categoriaActual.id === id ? 'bg-amber-400' : '';
  return (
    <div 
      className={`${resaltarCategoriaActual()} flex items-center gap-4 w-full border p-3 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
       <img src={`/img/icono_${icono}.svg`} alt="icono" className="w-12" />
        <span className="text-lg font-bold cursor-pointer">
          {nombre}
        </span>
    </div>
  )
}

