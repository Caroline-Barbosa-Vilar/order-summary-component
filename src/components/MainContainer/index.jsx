import styled from "styled-components";
import { lightBlue, white } from '../UI/variables';
import ContainerImage from '../ContainerImage/index';
import Summary from '../Summary/index';
import Plan from '../Plan/index';
import Buttons from '../Buttons';

const MainContainerStyle = styled.main`
  background-color: ${lightBlue};
  height: 44rem;
  margin: 3rem 0;
  width: 23.4rem;
`
const ContainerStyle = styled.div`
  background-color: ${white};
  border-radius: 20px;
  height: 80%;
  margin: 4.5rem auto;
  width: 88%;
`

function MainContainer() {
  return (
    <MainContainerStyle>
      <ContainerStyle>
        <ContainerImage/>
        <Summary/>
        <Plan/>
        <Buttons/>
      </ContainerStyle>
    </MainContainerStyle>
  )
}

export default MainContainer;