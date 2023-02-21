import styled from "styled-components";
import Image from '../../assets/img/Image/illustration-hero.svg';

const ImageSize = styled.img`
  border-radius: 20px 20px 0 0;
  width: 100%;
`

function ContainerImage() {
  return (
    <div>
      <ImageSize src={Image} alt="A person listening music with headphones and dancing"/>
    </div>
  )
}

export default ContainerImage;