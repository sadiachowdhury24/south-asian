import React from 'react'
// import { Switch } from 'react-router-dom'
// import JSONDATA from './THERAPIST_DATA.json'
import JSONDATA from './THERAPIST_SA_DATA.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { useState } from 'react'
import Button from 'react-bootstrap/Button'



const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div id="searchPage" >
            <input id = "searchbar"type="text" placeholder="🔍enter a state's name to find your therapist" onChange={event => {
                setSearchTerm(event.target.value);
            }}>

            </input>
            <br></br>
            {JSONDATA.filter((val) => {
                if(searchTerm === ""){
                    return val
                }
                else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                else if(val.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                else if(val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                return 0;
                
            }).map((val, key) => {
                return (<div id = 'searchTherapistCard' >
                 
                   
                        <Card  border="primary" style = {{width: '24rem', height:'755px'}}class = "searchTherapistCards" className = "box" >
                        <Card.Img id = "searchImage" src={val.image} style= {{height:'300px', width:'300px'}} roundedCircle/>

                            <Card.Header>
                            🩺{val.first_name} {val.last_name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>📍{val.location}  </Card.Title>
                                <Card.Text>
                                {val.email}
                               
                                </Card.Text>
                            <Button variant="outline-info">
                                <a href={val.link} >
                                    Click to book an Appointment</a>
                            </Button>
                            </Card.Body>
                        </Card>
             
               <br></br>
                
                    
                </div>
                )
            })}




        </div>
    )
}

export default Search
