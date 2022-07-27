import { Container } from "./styles";

const HeaderTop = ({ data }: any) => {

  const { label } = data;

  return (
    <Container>
      {label}
    </Container>
  );
}

export default HeaderTop;