import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Hero from '../../components/hero/Hero'
import ProductCard from '../../components/product-card/ProductCard'
import axios from 'axios'

const API = "https://dummyjson.com/products"

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(API)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Hero />
            <section id="products">
                <div className="container products__wrapper">
                    <ProductCard data={data} />
                </div>
            </section>
        </>
    )
}

export default Home