import styled from "styled-components";
import { grayishBlue } from '../../UI/variables';

const PlanLinkContainer = styled.div`
  font-size: .8rem;
  font-weight: 700;
  text-decoration: underline;
  padding-top: 2rem;
  transition: .3s ease-in-out;
  &:hover {
    text-decoration: none;
    opacity: .7;
  }
`
const PlanLinkStyle = styled.a`
  color: ${grayishBlue};
`

function PlanLink() {
  return (
    <PlanLinkContainer>
      <PlanLinkStyle href="#">Change</PlanLinkStyle>
    </PlanLinkContainer>
  )
}

export default PlanLink;