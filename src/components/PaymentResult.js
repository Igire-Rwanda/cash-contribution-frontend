import React, { useEffect } from 'react'
import axios from "axios";

function PaymentResult() {

    const paymentResult = new URLSearchParams(window.location.search);
    const ref = paymentResult.get('tx_ref');



    const updatePayment= async()=>{
       await  axios.put("http://localhost:4040/team/contributions/"+ref);
    }

    useEffect(()=>{
            updatePayment();
    },[ref]);


    return (
        <>
            <div className='mt-8 ml-[300px]'>
              <h1>payment successful!!</h1>
              <span className='text-red-500'>{ref} </span> 
            </div>
        </>
    )
}

export default PaymentResult
