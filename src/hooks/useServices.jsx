import { useEffect, useState } from "react";


const useServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-fwfxbobly.vercel.app/services', { withCredentials: true})
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return services;
};

export default useServices;