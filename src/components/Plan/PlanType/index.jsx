import styled from "styled-components";
import { gray, black } from '../../UI/variables';

const PlanTypeStyle = styled.div`
  width: 110px;
`

const PlanTypeTitle = styled.h4`
  color: ${black};
  font-size: .9rem;
  font-weight: 700;
  padding-top: 1.1rem;
  opacity: .8;
`

const PlanTypeDesc = styled.p`
  color: ${gray};
  font-size: .9rem;
  padding-top: .3rem;
  opacity: .8;
`

function PlanType() {
  return (
    <PlanTypeStyle>
      <PlanTypeTitle>Annual Plan</PlanTypeTitle>
      <PlanTypeDesc>$59.99/year</PlanTypeDesc>
    </PlanTypeStyle>
  )
}

export default PlanType;