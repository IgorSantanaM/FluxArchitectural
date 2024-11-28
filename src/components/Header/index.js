import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket} from 'react-icons/md';

import Logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header({ cartSize}){
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
export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);