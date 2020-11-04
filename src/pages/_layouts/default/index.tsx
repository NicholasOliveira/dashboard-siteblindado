import React, { useState } from 'react';

import { Wrapper } from './styles';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

import { Container } from './styles';

export default function DefaultLayout({ children }: any) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <Wrapper style={mobileOpen ? { marginLeft: 240 } : { marginLeft: 50 }}>
      <Menu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Container>
        {children}
      </Container>

      <Footer />
    </Wrapper >
  );
}
