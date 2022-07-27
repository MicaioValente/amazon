import { Container, Content } from "./styles";

import AmazonMap from "../../public/images/amazon-map.svg";

import Title from "../Title";

const TodayAmazon = () => {

  return (
    <Container>
      <Title>A AMAZÔNIA HOJE</Title>
      <Content background={AmazonMap} />
    </Container>
  );
}

export default TodayAmazon;