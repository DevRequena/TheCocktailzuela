import axios from 'axios'
import { useEffect, useState } from 'react';

export const useAxiosGetDrinks = (drink) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
      axios
          .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
          .then((res) => {
              setResponse(res.data.drinks);
          })
          .catch((err) => {
              setError(err);
          })
          .finally(() => {
              setloading(false);
          });
  };

  useEffect(() => {
      fetchData();
  }, []);

  // custom hook returns value
  return { response, error, loading };
};
