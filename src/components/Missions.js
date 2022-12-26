import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missoes.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <div className="titulo"><Title headline="Missões" /></div>
        <section>
          { missions.map((eleme) => (
            <div key={ eleme.name } className="missoes2">
              <MissionCard
                key={ eleme.name }
                name={ eleme.name }
                year={ eleme.year }
                country={ eleme.country }
                destination={ eleme.destination }
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
