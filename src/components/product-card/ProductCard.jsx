import React from 'react'
import "./ProductCard.scss"

import { FaStar } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { wishlistSlice } from '../../context/wishlistSlice';

const ProductCard = ({ data }) => {
    const addToWishlist = wishlistSlice(state => state.toggleToWishes)
    let wishlist = wishlistSlice(state => state.wishlist)
    let product = data?.map(el => (
        <div key={el.id} className="card">
            <i className='card__sale__box'>SALE</i>
            <i className='card__top__box'>TOP</i>
            <button onClick={() => addToWishlist(el)} className="card__like__btn">
                {
                    wishlist.some(w => w.id === el.id) ?
                        <FaHeart /> : <FaRegHeart />
                }
            </button>
            <div className="card__frame">
                <img src={el.images[0]} alt="" />
            </div>
            <div className="card__content">
                <p className="card__description">
                    {el.description}
                </p>
                <div className="card__rating__box">
                    <FaStar />
                    <p>{el.rating}</p>
                    <p>{el.stock} bought</p>
                </div>
                <del className="card__old__price">{el.price * 2} USD</del>
                <p className="card__current__price">{el.price} USD</p>
            </div>
        </div>
    ))
    return product
}

export default ProductCard