import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if(localStorage.getItem("user")){
        const role = JSON.parse(localStorage.getItem("user") as any).role;
        if(role == 0){
            return <Navigate to="/" />
        }else {
            return <Navigate to="/admin" />
        }
    }
    return props.children
}

export default PrivateRouter