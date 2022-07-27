import Image from "next/image";

import { Container } from "./styles";

import logoText from "../../public/images/logo-text.svg";
// import logoIcon from "../../public/logo-icon.svg";

const LogoHeader = () => {
  return (
    <Container>
      {/* <Image src={logoIcon} alt="MY AMAZON" /> */}
      <Image src={logoText} alt="MY AMAZON" />
    </Container>
  );
}

export default LogoHeader;