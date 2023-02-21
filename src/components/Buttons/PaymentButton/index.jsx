import styled from "styled-components";
import { blue, white } from '../../UI/variables';

const PaymentButtonStyle = styled.button`
  background-color: ${blue};
  border: none;
  border-radius: 10px;
  color: ${white};
  height: 3.1rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 1.5rem 1.5rem;
  transition: .3s ease-in-out;
  width: 85%;
  &:hover {
    opacity: .7;
    cursor: pointer;
  }
`

function PaymentButton() {
  return (
    <PaymentButtonStyle>Proceed to Payment</PaymentButtonStyle>
  )
}

export default PaymentButton;