import * as React from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}
