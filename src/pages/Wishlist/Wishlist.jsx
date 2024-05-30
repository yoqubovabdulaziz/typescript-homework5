import React from 'react'
import "./Wishlist.scss"

import { wishlistSlice } from "../../context/wishlistSlice"
import ProductCard from '../../components/product-card/ProductCard'

const Wishlist = () => {
    let wishlist = wishlistSlice(state => state.wishlist)

    return (
        <section id="wishlist">
            <div className="container wishlist">
                <h2 className="wishlist__title">Wishlist({wishlist.length})</h2>
                <div className="wishlist__wrapper">
                    <ProductCard data={wishlist} />
                </div>
            </div>
        </section>
    )
}

export default Wishlist