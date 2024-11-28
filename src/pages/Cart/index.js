import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { connect } from 'react-redux'; 

import {Container, ProductTable, Total} from './styles'
function Cart({ cart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product =>(
            <tr key={product.id}>
            <td>
              <img src={product.image} alt={product.title}></img>
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color= "#7159c1" />
                </button>
                <input type="number" readOnly value={product.amount}></input>
                <button type="button">
                  <MdAddCircleOutline size={20} color= "#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258.80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete siez={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish the Order</button>

        <Total>
          <span>TOTAL</span>
          <strong>$1920.28</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart); 