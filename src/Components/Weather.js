// Weather.js

import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
    const api_key = '2dab9684df9e7eb830f96f273d800b30';

    const [currentDay, setCurrentDay] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const search = async () => {
        const element = document.getElementsByClassName('search-input');

        if (element[0].value === '') {
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        const response = await fetch(url);
        const data = await response.json();
        const location = document.getElementsByClassName('location');
        const temperature = document.getElementsByClassName('temp');
        const weather = document.getElementsByClassName('weather1');
        location[0].innerHTML = data.name;
        temperature[0].innerHTML = data.main.temp;
        weather[0].innerHTML = data.weather.main;
    };

    // Get the current day, date, and time
    useEffect(() => {
        const getCurrentDateTime = () => {
            const today = new Date();
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayOfWeek = daysOfWeek[today.getDay()]; // Get the day of the week (e.g., "Mon")
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const formattedDate = `${monthNames[today.getMonth()]} ${today.getDate()}`; // Get the date (e.g., "Dec 20")
            const time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get the time (e.g., "12:45 PM")
            return { dayOfWeek, formattedDate, time };
        };

        const updateDateTime = () => {
            const { dayOfWeek, formattedDate, time } = getCurrentDateTime();
            setCurrentDay(dayOfWeek);
            setCurrentDate(formattedDate);
            setCurrentTime(time);
        };

        // Call the function initially
        updateDateTime();

        // Update the time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='weather'>
            <div className='search'>
                <input className='search-input' type='text' placeholder='Type location' />
                <button className='search-button' onClick={search}>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </div>
            <p className='location mt-4 fs-1'>Addis Ababa</p>
            <div id='clockdate' className='fs-5'>
                <div id='day'> {currentDay}</div>
                <div id='date'>{currentDate}</div>
                <div id='time'> {currentTime}</div>
            </div>
            <div className='status'>
                <p className='temp'>24</p>
                <p className='weather1'>Sunny</p>
            </div>
            
        </div>
    );
}

export default Weather;
