import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCircle, ArrowRight } from '@material-ui/icons/';
import Card from '../../components/Card';

import { Container, Row, Line, Button } from './styles';

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.Cart);
  const productsSize = products.length;
  return (
    <Container>
      <Row>
        <h2>Produtos no carrinho {productsSize}</h2>
        {products.map((product: any) => (
          <Line key={product.name}>
            <div>{product.name}</div>
            <div
              onClick={() =>
                dispatch({
                  type: '@cart/REMOVE',
                  id: product.id,
                })
              }
            >
              <RemoveCircle style={{ cursor: 'pointer' }} />
            </div>
          </Line>
        ))}
      </Row>
      {productsSize > 0 && (
        <Button onClick={() => alert('Compra finalizada :D')}>
          Fechar Compra <ArrowRight />
        </Button>
      )}
    </Container>
  );
}

export default Cart;
