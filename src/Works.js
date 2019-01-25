import React, { Component } from 'react';
import styled from 'styled-components';
import MainImageCard from './MainImageCard';
import Beirut from './images/beirut.png';
import Contes from './images/contes.png';
import Enlarged from './images/enlarged.png';
import Interior from './images/interior.png';
import mathaf from './images/mathaf.png';
import ocean from './images/oceanGazing.png';
import yuki from './images/yuki.png';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
`;

class Works extends Component {

  render() {
    return (
      <Center>
        <ImageGrid>
            <MainImageCard img={Beirut} name="Beirut Exhibition Center"/>
            <MainImageCard img={Contes} name="Contes Féeriques"/>
            <MainImageCard img={Enlarged} name="Enlarged to Show Detail"/>
            <MainImageCard img={Interior} name="Villa Sehnaoui Interior Design Elements"/>
            <MainImageCard img={mathaf} name="Mathaf Museum of Modern Arab Art"/>
            <MainImageCard img={ocean} name="Ocean Gazing Podcast Website"/>
            <MainImageCard img={yuki} name="Yuki Press Poster Pamphlet"/>

        </ImageGrid>
      </Center>        
    );
  }
}

export default Works;