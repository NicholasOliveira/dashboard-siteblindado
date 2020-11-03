import React from 'react';

import { Wrapper } from './styles';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

import { Container } from './styles';

export default function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <Menu />

      <Container>
        {children}
      </Container>

      <Footer />
    </Wrapper>
  );
}
