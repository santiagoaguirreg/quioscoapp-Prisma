import Image from "next/image"
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";



const Producto = ({producto}) => {

  const {handleSetProducto, handleSetModal} = useQuiosco()

    const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3">
        <Image 
        src={`/assets/img/${imagen}.jpg`} alt={`Imagen platillo ${nombre}`}
        width={400}
        height={500}
        />
       <div className="p-5">
         <h3 className="font-bold text-2xl">{nombre}</h3>
         <p className="mt-5 font-black text-4xl text-amber-500">
           {formatearDinero(precio)}
         </p>

         <button
          type="button"
          className="p-3 bg-indigo-600 mt-5 font-bold hover:bg-indigo-800 text-white w-full"
          onClick={()=> {
            handleSetModal()
            handleSetProducto(producto)
           }}
         >
           Agregar
         </button>
       </div>

    </div>

  )
}

export default Producto