import { useState,useEffect,useRef } from "react";
import SearchCitiesComponent from "./search";
import WeatherDetailComponent from "./weatherDetail";
import {URL_GEO,URL_CITY,API_KEY} from '../utilites/api';
import axios from 'axios';


function WeatherCompnent(){
    const [submitStatus, setSubmitStatus] = useState(0);
    const [city,setCity]=useState('');
    const [weatherData,setWeatherData]=useState(null);
    
    const fetchWeatherDetails=()=>{
       
        let lat;
        let lon;
       const geo =fetch(URL_GEO+`${city}&limit=5&appid=${API_KEY}`).then((res)=>{return res.json()}).then( (data)=> data)
        
       async  function run (){
           let res= await geo;
            
            axios({
                method:'get',
                url:URL_CITY+`lat=${res[0].lat}&lon=${res[0].lon}&appid=${API_KEY}`
            }).then((res)=>{
                console.log(typeof res.data);
                setWeatherData( res.data)
               
            });
        }

        run()

        
        // console.log(weatherData['main'].temp);
      

    }
    
      
   

    return(
        <div className="weather-page">
                <SearchCitiesComponent
                city={city}
                setCity={setCity}
                submitStatus={submitStatus}
                setSubmitStatus={setSubmitStatus}
                fetchWeatherDetails={fetchWeatherDetails}
                >

                </SearchCitiesComponent>

                <WeatherDetailComponent city={city} weatherData={weatherData} setWeatherData={setWeatherData}/>

            <div>


            </div>
        </div>
    );
}

export default WeatherCompnent;
