import { useEffect } from "react";
import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco";

export default function Total() { 

    const {pedido} = useQuiosco()

    const comprobarPedido = () => {
        return pedido.length === 0;
    }

    useEffect(() => {
     comprobarPedido();
    }, [pedido])

    const colocarOrden = (e) => {
        e.preventDefault();
        console.log("enviando orden...")
    }

    return (
        <Layout pagina="Total y Confirmar Pedido">
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu Pedido a Continunación</p>

        <form
         onSubmit={colocarOrden}
        >
            <div>
                <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl ">Nombre</label>

                <input 
                 id="nombre"
                 type="text"
                 className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"
                />
            </div>

            <div className="mt-10">
                <p className="text-2xl">Total a pagar: {''} <span className="font-bold">$200</span>
                </p>
            </div>

            <div className="mt-5">
                <input 
                    type="submit"
                    className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600'} bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center hover:cursor-pointer`}
                    value="Confirmar Pedido"
                    disabled={comprobarPedido()}
                />

            </div>

        </form>
        </Layout>
    )

}