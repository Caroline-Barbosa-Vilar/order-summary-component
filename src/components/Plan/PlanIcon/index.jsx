import styled from 'styled-components';
import Image from '../../../assets/img/Icons/icon-music.svg';

const PlanIconStyle = styled.img`
  height: 3rem;
  margin: 1rem 0 0 .1rem;
  width: 3rem;
`

function PlanIcon() {
  return (
      <div>
        <PlanIconStyle src={Image} alt="a neuma from bass to treble icon"/>
      </div>
  )
}

export default PlanIcon;