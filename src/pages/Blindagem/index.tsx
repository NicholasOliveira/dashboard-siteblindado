import React from 'react';
import Card from '../../components/Card';
import { ProductsList } from '../../services/ProductsList';

import { Container, Row } from './styles';

const Blindagem = () => {
  const Products = ProductsList.map((item: any) => {
    if (item.category === 'blindagem_sites') {
      return <Card viewDescription={true} content={item} />;
    }
    return false;
  });
  return (
    <Container>
      <Row>{Products}</Row>
    </Container>
  );
};

export default Blindagem;
