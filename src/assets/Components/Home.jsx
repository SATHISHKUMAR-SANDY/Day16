import React from 'react'
import useFetch from '../CustomHooks/useFetch'

const Home = () => {
  let{product} = useFetch("http://localhost:8000/products")
  return (
    <h1>Home -Total Products = {product.length}</h1>
  )
}

export default Home