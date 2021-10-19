import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [services,setServices]=useState();
    const [service,setService]= useState();
    const {serviceID}=useParams();

    
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    // 
    useEffect(()=>{
        const servicer = services?.find(service=>service.id==serviceID)
        setService(servicer)
    },[services])

   
    return (
        <div className="d-flex justify-content-center">
            <div className="card card-width">
        <div style={{width:'100%',height:"200px",overflow:"hidden"}}>
        <img src={service?.img} style={{width:'100%',objectFit:"cover"}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{service?.name}</h5>
          <p className="card-text">{service?.description}</p>
          
          
        </div>
      </div>
        </div>
    );
};

export default ServiceDetail;