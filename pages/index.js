
import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import Producto from '../components/Producto';
import Search from '../components/Search';
import React, { useState, useEffect } from 'react';



export default function Home() {
  const {categoriaActual, buscar} = useQuiosco()
  let {results} = useQuiosco()


    if(!buscar) {
        results = categoriaActual?.productos;
    } else {
      results = categoriaActual?.productos?.filter(producto => 
            producto.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())
        )
    }




  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tus pedidoss
      </p>
      <Search />
     
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {results?.map(producto => (
         <Producto key={producto.id} producto={producto} />
      ))}
       </div>
    </Layout>

  )
}



