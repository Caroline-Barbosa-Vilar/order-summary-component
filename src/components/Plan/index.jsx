import PlanIcon from './PlanIcon/index';
import PlanType from './PlanType/index';
import PlanLink from './PlanLink/index';


import styled from "styled-components";
import { veryLightBlue } from '../UI/variables';

const PlanStyle = styled.section`
 background-color: ${veryLightBlue};
  display: flex;
  justify-content: space-around;
  height: 5rem;
  margin: 1.5rem auto 0;
  border-radius: 10px;
  width: 85%;
`

function Plan() {
  return (
    <PlanStyle>
      <PlanIcon/>
      <PlanType/>
      <PlanLink/>
    </PlanStyle>
  )
}

export default Plan;