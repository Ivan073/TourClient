import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navbar, NavItem, Icon, Image } from 'react-materialize';
import 'materialize-css';

const Header = () => {
  const [weatherData,setWeatherData] = useState()
  const [weatherError,setWeatherError] = useState(false)

  const config = {
    headers: {
      'X-Yandex-API-Key': 'b8e2e2e0-3feb-4ecb-bc99-aed5e0c638ab',
      'Content-Type': 'application/json'
    },
    withCredentials: false,
    mode: 'no-cors'
  };

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://api.weather.yandex.ru/v2/forecast?lat=53.8992&lon=27.5485', config).then(response => {
        if(response.data != ''){
          setWeatherData(response.data)
        }
      }).catch(error => {
        console.log(error)
        setWeatherError(true)
      })
},[])

  return (
    <div>
    <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="/">
    <img src={`${process.env.PUBLIC_URL}/logo.png`} style={{ maxWidth: '65px', maxHeight: '65px' }}/>
    </a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
<NavItem>
    {weatherError && "Погода недоступна"}
    {!weatherError && !weatherData && "Погода загружается..."}
    {!weatherError && weatherData && "Погода: "+weatherData.fact.temp +"°C, "+ "ощущается как "+weatherData.fact.feels_like +"°C"}
  </NavItem>
  <NavItem href="http://localhost:8080/login">
    Войти
  </NavItem>
</Navbar>
</div>
  );
};

export default Header;