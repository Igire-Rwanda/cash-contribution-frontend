import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'


function CreateTeam() {

    const {register, handleSubmit, formState: {errors} } = useForm();
    console.log(errors)

    return (
        <div>
            <>
                <div className=''>
                    <div className=' p-16 h-screen h-[100%]'>

                        <div className=" max-w-md mx-auto">
                            <div className=' bg-white p-16 rounded-2xl drop-shadow-xl'>
                                <p className=''>Add your Team</p>

                                <form className=' pt-[20px]' action='#' onSubmit={handleSubmit(() => {

                                })}>

                                    <p className=''>Name</p>
                                    <input id= "name" type="name" {...register("name", {required: 'please enter name'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.name?.message}</p>

                                    <p className=''>Wallet</p>
                                    <input id="wallet" type="wallet" {...register("wallet", {required: 'please enter email'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.wallet?.message}</p>

                                    <p className=''>Description</p>
                                    <input id="description" type="description" {...register("description", {required: 'please enter email'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.description?.message}</p>


                                    <button type='submit' className='rounded-md border-solid border-2 border-x-emerald-900 p-2  rounded-md w-[100px] hover:bg-emerald-900 hover:border-solid hover:border-3 hover:border-x-white  mt-2'>Add Team</button>

                                </form>

                            </div>
                        </div>


                    </div>
                </div>
            </>
        </div>
    )
}

export default CreateTeam
