import axios from 'axios';
import { useState,useEffect } from 'react';
import FooterCommon from './FooterCommon/FooterCommon';


const Layout = ({children}) => {
    const [footerDetails,setFooterDetails] = useState({})
    useEffect(()=> {
        axios.get('http://localhost:3000/api/footerapi').then(response => setFooterDetails(response.data))
        console.log(footerDetails);
    },[])
    console.log(footerDetails)
    return (
        <>
         <div >
            {children}
        </div>
        <FooterCommon footerDetails={footerDetails}/>
        </>
    );
};

export default Layout;