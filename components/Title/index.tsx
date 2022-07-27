import { Container, Icon } from "./styles";

import TitleIllstration from "../../public/icons/title-illustration.svg";

const Title = ({ children }: any) => {

  return (
    <Container >
      <h2>{children}</h2>
      <Icon image={TitleIllstration} />
    </Container>
  );
}

export default Title;