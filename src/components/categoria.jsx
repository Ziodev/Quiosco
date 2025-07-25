export default function categoria(props) {
  const {icono, nombre, id} = props.categoria;
  return (
    <div className="flex items-center gap-4 w-full border p-3 hover:bg-amber-400 hover:cursor-pointer">
       <img src={`/img/icono_${icono}.svg`} alt="icono" className="w-12" />
        <p className="text-lg font-bold cursor-pointer">{nombre}</p>
    </div>
  )
}
