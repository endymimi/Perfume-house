import React from 'react'
import Cart from '../feactures/Cart'
import Products from '../feactures/Products'

const Home = () => {
  return (
    <>
  
    <main className='container mx-auto p-[25px]  md:px-[15px] lg:py-[33px] lg:px-[99px] md:flex grid-cols-3 gap-8'>
       <section className='col-span-2'>
           <Products/>
       </section>

       <section className='md:ml-[50px] mb-20 '> 
            <Cart/>
       </section>
    </main>
    </>
  )
}

export default Home
