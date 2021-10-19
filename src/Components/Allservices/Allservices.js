import React, { useEffect, useState } from 'react';
import Allservice from '../Allservice/Allservice';
import Header from '../Shared/Header/Header';
import './Allservices.css'
const Allservices = () => {
    const [allservices, Allservices] = useState()
    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => Allservices(data))
    },[])
    return (
        <div className="allservices-container">
            <Header></Header>
            <div className="text-center m-5">
                <h1>All Services</h1>
            </div>
            <div className="allservices-contrainer">
            {
                allservices?.map(allService => <Allservice allservice={allService}></Allservice> )
            }
        </div>
        </div>
    );
};

export default Allservices;