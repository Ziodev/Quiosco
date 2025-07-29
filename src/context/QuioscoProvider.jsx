import { createContext, useState } from "react";
import { categorias as categoriasDB} from "../data/categorias"; 
import { toast } from "react-toastify";
const QuioscoContext = createContext(); 

function QuioscoProvider({children}) {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handdleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) =>{
        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(pedidoActualizado);
            toast.warning('Producto actualizado');
        }
        else{
            setPedido([...pedido, producto]);
            toast.success('Producto agregado al pedido');
        }
    }

    const handleEditarCantidad = id => {
        const productoEditar = pedido.filter( producto => producto.id === id)[0];
        setProducto(productoEditar);
        setModal(!modal);
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Producto eliminado del pedido');
    }

    return(
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handdleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProducto
        }}>
            {children}
        </QuioscoContext.Provider>
    )
} 

export { QuioscoContext, QuioscoProvider };