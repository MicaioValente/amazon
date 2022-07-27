import Image from "next/image";

import { Container } from "./styles";

import logoIconWhite from "../../public/icons/logo-icon-white.svg";
import logoTextWhite1 from "../../public/images/logo-text-white-1.svg";
import logoTextWhite2 from "../../public/images/logo-text-white-2.svg";

const LogoFooter = () => {
  return (
    <Container>
      <Image src={logoIconWhite} alt="LOGO ÍCONE MY AMAZON" />
      <div>
        <Image src={logoTextWhite1} alt="MY" />
        <Image src={logoTextWhite2} alt="AMAZON" />
      </div>
    </Container>
  );
}

export default LogoFooter;