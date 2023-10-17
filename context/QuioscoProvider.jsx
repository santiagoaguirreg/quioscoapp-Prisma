import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias ] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')

    const router = useRouter()


    const obtenerCategorias = async () => {
         const {data} = await axios('api/categorias')
         setCategorias(data)
    }
    useEffect(() => {
      obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
      }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        console.log(categoria[0])
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
      setProducto(producto)
    }

    const handleSetModal = () => {
      setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) =>
     {

      if(pedido.some(productoState => productoState.id === producto.id)) {
        
        const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)

        setPedido(pedidoActualizado)

        toast.success('Guardado correctamente')
      } else {
        setPedido([...pedido, producto])
        toast.success('Agregado al pedido')
      }

      setModal(false)
       
     }

     const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
     }

     const handleEliminarProducto = id => {
      const productoActualizar = pedido.filter(producto => producto.id !== id)
      setPedido(productoActualizar)
     }


    return(
        <QuioscoContext.Provider
           value={{
             categorias,
             categoriaActual,
             handleClickCategoria,
             producto, 
             handleSetProducto,
             modal,
             handleSetModal,
             handleAgregarPedido,
             pedido,
             handleEditarCantidad,
             handleEliminarProducto,
             nombre,
             setNombre
           }}
        >
          {children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext