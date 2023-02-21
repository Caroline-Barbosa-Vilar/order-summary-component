import styled from "styled-components";
import { gray, black } from '../UI/variables';

const SummaryTitle = styled.h1`
  color: ${black};
  font-size: 1.34rem;
  font-weight: 900;
  opacity: 0.8;
  padding-top: 1.9rem;
  text-align: center;
`
const SummaryText = styled.p`
  color: ${gray};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  padding: 1.1rem 2rem 0;
  text-align: center;
`

function Summary() {
  return (
    <div>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryText>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</SummaryText>
    </div>
  )
}

export default Summary;