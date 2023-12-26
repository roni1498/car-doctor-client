import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-fwfxbobly.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const Navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use( res => {
            return res;
        }, error =>{
            console.log('error tracked in the interceptors', error.response)
            if(error.response.status === 401 || error.response.status(403)){
                console.log('user logout')
                logOut()
                .then(()=>{
                        Navigate('/login')
                })
                .catch(error => console.log(error))
            }
        })
    },[Navigate, logOut])
   return axiosSecure;
};

export default useAxiosSecure;