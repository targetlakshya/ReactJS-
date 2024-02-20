import React, { useEffect ,useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Protected({children, authenication = true}) {
    
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // TODO: make it more easy
        if(authenication && authStatus !== authenication){
            navigate('/login');
        }
        else if (!authenication && authStatus !== authenication){
            navigate('/');
        }
        setLoader(false);
    },[authStatus, navigate, authenication ])

    return ( 
        <div>AuthLayout</div>
     );
}

