
import useQuiosco from '../hooks/useQuiosco';


const Search = () => {

const {setBuscar, categoriaActual, buscar} = useQuiosco()

let {results} = useQuiosco()


const searcher = (e) => {
    setBuscar(e.target.value);
}

    if(!buscar) {
        results = categoriaActual?.productos;
    } else {
      results = categoriaActual?.productos?.filter(producto => 
            producto.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())
        )
    }

  


  return (
    <>
    
    <form className="flex items-center max-w-sm mx-auto mt-5 mb-4">   
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="search" value={buscar} onChange={searcher} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..." required />
    </div>
   </form>


    </>
  )
}

export default Search