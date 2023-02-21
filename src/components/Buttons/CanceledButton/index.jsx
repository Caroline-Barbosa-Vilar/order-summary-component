import styled from "styled-components";
import { gray, black } from '../../UI/variables';

const CanceledButtonStyle = styled.button`
  background: transparent; 
  border: none;
  color: ${gray};
  font-size: 1rem;
  font-weight: 900;
  margin: 0 7rem;
  position: relative;
  &:hover {
    color:${black};
    cursor: pointer; 
  }
`

function CanceledButton() {
  return (
    <CanceledButtonStyle>Cancel Order</CanceledButtonStyle>
  ) 
}

export default CanceledButton;