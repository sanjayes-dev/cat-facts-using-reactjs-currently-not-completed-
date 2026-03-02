import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Factcard from './Factcard';
function Factbutton() {
    
    const [Catfact,setCatfact]= useState({})
    // save api to an variable
    const baseURL='https://catfact.ninja/fact'
    // to get api 
    const getfacts=async ()=>{
        try{
             const response1 = await fetch(baseURL)
            console.log(response1);
            // convert json object to js object
            const facts= await response1.json()
            console.log(facts);
            // store the value to catfact
            setCatfact(facts)
            
        }
        catch(err){
            console.log('error',err);
            
        }
    }
  return (
     
    <div className='text-center mt-4'>
        {/* props to factcard to connect and display api value in factcard */}
        <Factcard facts={Catfact.fact}/>
        {/* when clicking the button it executes getfacts function */}
       <Button className='mt-4' onClick={getfacts}  variant="contained">Facts</Button>
        
    </div>
    
  )
}

export default Factbutton
