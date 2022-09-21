import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="mostra-planetas">
          {missions.map((eleme) => (
            <MissionCard
              key={ eleme.name }
              name={ eleme.name }
              year={ eleme.year }
              country={ eleme.country }
              destination={ eleme.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
