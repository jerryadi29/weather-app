import { useState, useEffect } from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Button } from "@mui/material";
import Input from '@mui/joy/Input';
import '../styles/search.css'


function SearchCitiesComponent(props) {

    const { city, setCity, submitStatus, setSubmitStatus ,fetchWeatherDetails} = props


    const handleSumbit = (e) => {
        if(e.target.value==null){
            e.preventDefault();
            setSubmitStatus(1)
        }

        
        e.preventDefault();
        fetchWeatherDetails();
    } 


    const handleEmptyValue = () => {
        
    }

    return (

        <div className="serach-bar" >
            <form >
                <label htmlFor="city-name">
                    Search Weather :
                </label>

                <Input placeholder='City Name' variant="outlined" size="sm" onChange={(e) => setCity(e.target.value)} />
                <br />

                {
                    submitStatus == 0 ?
                        <Button
                            type="button"
                            onClick={handleSumbit}
                            color="primary"
                            disabled={false}
                            size="md"
                            variant="outlined"
                        ><SearchSharpIcon />
                        </Button> :
                        <Button
                            type="button"
                            color="primary"
                            disabled={true}
                            size="md"
                            variant="outlined"
                        >
                            <SearchSharpIcon />
                        </Button>
                }




            </form>

        </div>
    );


}

export default SearchCitiesComponent;