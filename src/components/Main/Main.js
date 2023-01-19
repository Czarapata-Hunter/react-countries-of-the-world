import * as React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error, isLoading } = useCountries();
  const [continent, setContinent] = React.useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  if (isLoading && !error) {
    return (
      <article>
        <p className="loading">Loading...</p>
      </article>
    );
  }
  //   console.log(countries);
  return (
    <main className="main">
      <div className="drop-down">
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">All</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
      <div className="data">
        {filtered.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </main>
  );
}
