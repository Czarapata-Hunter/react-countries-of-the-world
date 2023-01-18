import * as React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();

  //   console.log(countries);
  return (
    <main className="main">
      <p>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </main>
  );
}
