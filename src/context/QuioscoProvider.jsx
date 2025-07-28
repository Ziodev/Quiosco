import { createContext, useState } from "react";
import { categorias as categoriasDB} from "../data/categorias";
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
        }}>
            {children}
        </QuioscoContext.Provider>
    )
} 

export { QuioscoContext, QuioscoProvider };