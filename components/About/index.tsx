import { Container, Content } from "./styles";

import BackgroundIllstration from "../../public/images/background-illustration.svg";

import Title from "../Title";

const About = () => {

  return (
    <Container>
      <Title>UM POUCO SOBRE A MYAMAZON</Title>
      <Content background={BackgroundIllstration} />
    </Container>
  );
}

export default About;