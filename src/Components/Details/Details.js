import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import './Details.css'
const Details = () => {
    const {id} = useParams()
    const [details, setDetails] = useState()
    useEffect(()=>{
        fetch('/fakedb.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    } ,[])
    const service = details?.find(dtls=> dtls._id === id)
    return (
        <div className="detalis-container">
            <Header></Header>
            {
            <div>
                <h1 className="service-name">{service?.name}</h1>
                <div className="row">
                <div className="col-md-6">
                <img className="details-img" src={service?.picture} alt="" />
                </div>
                <div className="col-md-6">
                <p className="text-light discrip">
                {service?.discriptiion}
                </p>
                <button className="dtls-btn">BOOK A CONSULTATION</button>
            </div>
            </div>
            </div>
            }
        </div>
    );
};

export default Details;