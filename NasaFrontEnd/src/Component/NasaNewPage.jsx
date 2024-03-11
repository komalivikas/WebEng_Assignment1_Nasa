// src/Component/NasaNewPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NasaNewPage.css';

const NasaNewPage = () => {
    const [selectedDate, setSelectedDate] = useState('_');
    const [fromDate, setFromDate] = useState('_');
    const [toDate, setToDate] = useState('_');
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clearFeedback, setClearFeedback] = useState(null);

    // Clear inputs and provide feedback to the user
    const clearInputs = () => {
        setSelectedDate('_');
        setFromDate('_');
        setToDate('_');
        setCount(0);

        // Set feedback message
    setClearFeedback('Inputs cleared successfully!');

    setTimeout(() => {
        setClearFeedback(null);
    }, 3000);
    };

    // Handler for selecting date
    const handleSelectedDate = (selectedDate) => {
      const currentDate = new Date();
      const selectedDateObj = new Date(selectedDate);

      // Check if the selected date is today or a previous date
      if (selectedDateObj > currentDate) {
          // If a future date is selected, display a message
          setClearFeedback('Please select today\'s date or a previous date.');
          setTimeout(() => {
              setClearFeedback(null);
          }, 10000);
      } else {
          // If a valid date is selected, update the state
          setSelectedDate(selectedDate);
      }
  };

    const formattedSelectedDate = selectedDate || null;
    const formattedFromDate = fromDate || null;
    const formattedToDate = toDate || null;

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
  
    // Log parameters before making the request
    console.log('Selected Date: ', selectedDate);
    console.log('From Date: ', fromDate);
    console.log('To Date: ', toDate);
    console.log('Image Count: ', count);

    var response = null;
// Ensure selectedDate is not null before making the request
if (selectedDate != "_") {
    console.log('THIS IS THE IF STATEMENT:');
    console.log('SELECTD DATE:', selectedDate);
    // Format the dates here before sending them in the request
    const formattedFromDate = fromDate || '';
    const formattedToDate = toDate || '';
          const response = await axios.get('http://localhost:8080/nasa/apod', {
            params: {
              date: selectedDate,
            },
          });

        console.log('Formatted Selected Date:', formattedSelectedDate);
        console.log('Formatted From Date:', formattedFromDate);
        console.log('Formatted To Date:', formattedToDate);
  
    // Log the complete URL and the response
    console.log('API URL:', response.config.url);
    console.log('Response:', response.data);

     // Log the data structure before processing it for rendering
     console.log('Data Structure:', response.data);

          setData(response.data);
        } 
        
        else if (selectedDate=='_' && formattedFromDate != '_' && formattedToDate != '_') {

            console.log('THIS IS THE ELSE-IF STATEMENT:');

            response = await axios.get('http://localhost:8080/nasa/apod?start_date='+formattedFromDate+'&end_date='+formattedToDate)  
              console.log('Response:', response.data); 
              setData(response.data);
        } 
        else if(count>0) {
            console.log('THIS IS THE ELSE STATEMENT:');
            response = await axios.get('http://localhost:8080/nasa/apod?count='+count)
            console.log('Response:', response.data); 
            setData(response.data); 

        }
        else {
            console.log('THIS IS THE LAST ELSE STATEMENT:');

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            response = await axios.get('http://localhost:8080/nasa/apod?date='+today)
            console.log('Response:', response.data); 
            setData(response.data); 
            console.log('today:', today); 
        }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [selectedDate, fromDate, toDate, count]);
  
    return (
      <div>
        <h1>New Page</h1>
  
        {/* Form inputs for selecting date, from date, to date, and count */}
        <div className="input-container">
        <label>
          Select Date:
          <input type="date" value={selectedDate} onChange={(e) => handleSelectedDate(e.target.value)} />
        </label>
        </div>
  
        <div className="input-container">
        <label>
          From Date:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </label>
        </div>

        <div className="input-container">
        <label>
          To Date:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </label>
        </div>

        <div className="input-container">
        <label>
          Image Count:
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        </label>
        </div>
  
        {/* Clear button */}
         <button onClick={clearInputs}>Clear</button>

        {/* Display clear feedback */}
        {clearFeedback && <p>{clearFeedback}</p>}

        {/* Loading and error messages */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {/* Display data based on the response */}
        {data !== null && Array.isArray(data) ? (
          <ul>
             {console.log('Array lenght:', data.length)}
            {data.map((item, index) => (
              <li key={index}>
                <h2>{item.title}</h2>
                <p>Date: {item.date}</p>
                <p>Explanation: {item.explanation}</p>
                <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    );
  };
  
  export default NasaNewPage;