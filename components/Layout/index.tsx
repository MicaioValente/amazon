import { ReactElement } from 'react';

import { Container } from './styles';

import HeaderTop from '../HeaderTop';
import Header from '../Header';
import Footer from '../Footer';
import FooterBottom from '../FooterBottom';

type Props = {
  children: ReactElement | any,
  data: any
}

const Layout = ({ data, children }: Props) => {

  const { header, headerTop } = data;

  return (
    <>
      <HeaderTop data={headerTop} />
      <Header data={header} />
      <Container>
        {children}
      </Container>
      <Footer />
      <FooterBottom />
    </>
  );
}

export default Layout;