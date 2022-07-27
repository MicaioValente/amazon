import { Container } from "./styles";

import ImageBanner from "../../public/images/image-banner.png";
import BannerButton from "../BannerButton";

const Banner = () => {

  return (
    <Container background={ImageBanner}>
      <iframe
        width="100%"
        height="630"
        src={`https://www.youtube.com/embed/${'bbcBgy8-W-g'}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <BannerButton>
        CLIQUE AQUI PARA NAVEGAR NO VÍDEO INTERATIVO
      </BannerButton>
    </Container>
  );
}

export default Banner;