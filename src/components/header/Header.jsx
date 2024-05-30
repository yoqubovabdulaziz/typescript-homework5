import React, { useEffect, useState } from 'react'
import "./Header.scss"

import { FaBookOpen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiBox1Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";

import { NavLink } from 'react-router-dom'
import axios from 'axios';

const API = "https://dummyjson.com/products"

const Header = () => {
    const [searchValue, setSearchValue] = useState("")
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(API)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [])

    let searchItem = data?.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))

    return (
        <>
            <header id="header" className="header">
                <nav className="nav container">
                    <NavLink to={"/"} className="nav__logo">
                        AliExpress
                    </NavLink>
                    <div className="nav__actions">
                        <div className="nav__katalog__box nav__item">
                            <FaBookOpen />
                            <p>Catalog</p>
                        </div>
                        <div className="nav__search__box">
                            <div className="nav__search__inp__box">
                                <input
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                    type="text"
                                    placeholder='Search'
                                />
                                {
                                    searchValue ? <button onClick={() => setSearchValue("")}><IoClose /></button> : <></>
                                }
                            </div>
                            <button className="nav__search__btn">Find</button>
                            <div className="nav__search__content__box">
                                {
                                    searchItem?.length ? searchValue.trim() ? searchItem.map(el =>
                                    (
                                        <div key={el.id} className="search__item">
                                            <img src={el.images[0]} alt="" />
                                            <p>{el.title}</p>
                                        </div>
                                    )
                                    ) : <></> : <div className='search__item__empty'>Afsuski hech narsa topilmadi</div>
                                }
                            </div>
                        </div>
                        <NavLink to={"/wishlist"} className="nav__orders__box nav__item">
                            <RiBox1Fill />
                            <p>Orders</p>
                        </NavLink>
                        <div className="nav__cart__box nav__item">
                            <FaCartShopping />
                            <p>Cart</p>
                        </div>
                        <div className="nav__sign__box nav__item">
                            <BsEmojiSmile />
                            <p>Sign in</p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header