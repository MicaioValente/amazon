import { Container, Icon } from "./styles";

import Arrow from "../../public/icons/arrow.svg";

type Props = {
  children: string
}

const BannerButton = ({ children }: Props) => {

  return (
    <Container>
      {children}
      <Icon image={Arrow} />
    </Container>
  );
}

export default BannerButton;