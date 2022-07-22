import { useState, useEffect } from 'react';

import MainView from './MainView';
import './Main.css';

function Main() {
  const [isLoading, setLoading] = useState(false);
  const [boutiques, setBoutiques] = useState([]);

  useEffect(() => {
    getBoutiques();
  }, []);


  const getBoutiques = async () => {
    await fetch("https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques")
    .then(response => response.json())
    .then(
      (response) => {
        setLoading(true);
        setBoutiques(response);
      },
      (error) => {
        setLoading(true);
        throw new Error('Something went wrong with the call');
      }
    )
  }

  return (
    <MainView boutiques={ boutiques } isLoading={ isLoading } />
  );
}

export default Main;
