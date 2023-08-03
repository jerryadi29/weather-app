import React, { useEffect, useState } from 'react';
import '../styles/weatheDetail.css'

function WeatherDetailComponent(props) {


    const { city, weatherData, setWeatherData } = props;
    let date = new Date();
    let iconurl
    if (weatherData) {
        iconurl = "http://openweathermap.org/img/w/" + weatherData['weather'][0].icon + ".png";
    }


    return (
        <div class="main container">
            {
                weatherData ? <div class="row">
                    <div class="col-xs-12">

                        <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
                            <div class="col-xs-6">
                                <h2>{city}<br /><small>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</small></h2>
                                <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i> {weatherData ? weatherData['weather'][0].description : null}</p>
                                <img src={iconurl} alt="" style={{ width: '50px', height: '60px' }} />
                            </div>

                            <div class="col-xs-6 text-center">
                                <div class="h1 temperature">
                                    <span>{weatherData ? ((Number(weatherData['main'].temp) - 32) * 5 / 9).toFixed(3) : null} &deg;C </span>
                                    <br />
                                    <small>{weatherData ? ((Number(weatherData['main'].temp_min) - 32) * 5 / 9).toFixed(3) : null}&deg;C / {weatherData ? ((Number(weatherData['main'].temp_max) - 32) * 5 / 9).toFixed(3) : null}&deg;C</small>
                                </div>
                            </div>

                            
                            <div class="col-xs-6 text-center">
                                <div class="h1 temperature">
                                    <span>{weatherData?weatherData['wind'].speed : null} km/hr  </span>
                                    <br />
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div> : null
            }


        </div>
        // <div className='weather-details'>
        //  temp: {weatherData?weatherData['main'].temp: null}
        //  <br /> : 
        //  minTemp: {weatherData?weatherData['main'].temp_min : null}
        //  <br />
        //  maxTemp: {weatherData?weatherData['main'].temp_max : null}
        //  <br />
        //  humidity: {weatherData?weatherData['main'].humidity : null}
        //  <br />
        //  windspeed: {weatherData?weatherData['wind'].speed : null}
        //  <br />
        //  description: {weatherData?weatherData['weather'][0].description : null}

        // </div>




    )

}

export default WeatherDetailComponent;