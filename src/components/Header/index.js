import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket} from 'react-icons/md';

import Logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header(){
    const cartSize = useSelector(state => state.cart.length);

    return (    
        <Container>
            <Link to="/">
            <img src={Logo} alt="KinsoftwareShoes" />
            </Link>
            
            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>   
                    <span>{cartSize} itens</span>
                    <MdShoppingBasket size={36} color="#fff" />
                </div> 
            </Cart>
        </Container>
    )
}