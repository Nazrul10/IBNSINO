import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState();
    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
           <div className="services-container">
               <div>
                   <h1 className="text-center m-5 text-light weight">Service</h1>
               </div>
               <div className="service-grid">
                {
                    services?.slice(0, 6).map(service => <Service service={service}></Service>)
                }
        </div>
           </div>
    );
};

export default Services;