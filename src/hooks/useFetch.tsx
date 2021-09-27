import axios from 'axios';
import {useEffect, useState} from 'react';
import {BASE_URL} from '../redux/constants';

const useFetch = (route: String) => {
  console.log(route);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null || {});

  useEffect(() => {
    const url = BASE_URL + route;
    console.log(url);
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [route]);
  return {data, isLoading, error};
};

export default useFetch;
