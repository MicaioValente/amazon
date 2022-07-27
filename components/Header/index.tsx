import { Container } from "./styles";

import NavBar from "../NavBar";
import LogoHeader from "../LogoHeader";

const Header = ({ data }: any) => {

  const { links } = data;

  return (
    <Container>
      <LogoHeader />
      <NavBar links={links} />
    </Container>
  );
}

export default Header;