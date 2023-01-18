import * as React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
        <img src={`https://flagcdn.com/48x36/${iso2.toLowerCase()}.png`} />
        <div className="iso2">{iso2}</div>
      </div>
    </div>
  );
}
