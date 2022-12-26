import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';
import '../styles/Planetas.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="page-planet">
        <div className="titu"><Title headline="Planetas" /></div>
        <section className="mostra-planetas">
          {planets.map((eleme) => (
            <PlanetCard
              key={ eleme.name }
              planetName={ eleme.name }
              planetImage={ eleme.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
