import Image from "next/image";

import { Container } from "./styles";

import logoWorkDB from "../../public/icons/logo-workdb.svg";

const FooterBottom = () => {

  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Image src={logoWorkDB} alt="logo workdb" />
      <p>Ⓒ {currentYear} WorkdDB Data Business</p>
    </Container>
  );
}

export default FooterBottom;