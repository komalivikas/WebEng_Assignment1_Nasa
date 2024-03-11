//NasaApiComponent

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NasaApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/nasa/apod')
        
        ;
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>NasaApi</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
         <p>Date: {item.date}</p>
            <p>Explanation: {item.explanation}</p>
            <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaApiComponent;
