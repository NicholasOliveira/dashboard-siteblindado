import React from 'react';
import { Container, Row } from './styles';
import { ProductsList } from '../../services/ProductsList';
import Modal from '../../components/Modal';
import Card from '../../components/Card';

function Loja() {
  const [open, setOpen] = React.useState(false);
  const [content, SetContent] = React.useState({});

  const handleOpenModal = (index: number) => {
    setOpen(true);
    SetContent(ProductsList[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Modal
        open={open}
        handleOpen={handleOpenModal}
        handleClose={handleClose}
        content={content}
      />
      <Row>
        {ProductsList.map((product: any, index: number) => (
          <Card
            key={product.name}
            handleOpenModal={() => handleOpenModal(index)}
            content={product}
          />
        ))}
        {}
      </Row>
    </Container>
  );
}

export default Loja;
