import { House } from '../../Types/House';
import { getColors } from '../../helpers/getColors';
import './Card.scss';
import React from 'react';

type Props = {
  house: House;
}

export const Card: React.FC<Props> = ({ house }) => {
  const {
    name,
    founder,
    houseColours,
    animal,
  } = house;

  const {
    primaryColor,
    secondaryColor,
  } = getColors(houseColours);

  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
    width: '100%',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2em',
    borderRadius: '5px'
  };

  return (
    <div className="card">
      <div className="card__heading">
        <h2 className="card__name">
          {name}
        </h2>
        <p className="card__animal">
          {animal}
        </p>
      </div>

      <div style={gradientStyle} />

      <div className="card__founder">
        <h5 className="card__founderLabel">
          Founder:
        </h5>
        <h5 className="card__founderName">
          {founder}
        </h5>
      </div>
    </div>
  );
}
