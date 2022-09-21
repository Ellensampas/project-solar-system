import React from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {
            Planets.map((eleme) => (<PlanetCard
              key={ eleme.name }
              nome={ eleme.name }
              imagem={ eleme.image }
            />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
