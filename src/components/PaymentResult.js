import React from 'react'

function PaymentResult() {

    const paymentResult = new URLSearchParams(window.location.search);
    const ref = paymentResult.get('tx_ref')


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
