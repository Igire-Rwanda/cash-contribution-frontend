import React, {useState}from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import{useNavigate}from 'react-router-dom'



function CreateTeam() {

    const {register, handleSubmit, formState: {errors} } = useForm();
    console.log(errors)
    const [loading, setLoading] = useState (false)
    const navigate = useNavigate();

    return (
        <div>
            <>
                <div className=''>
                    <div className=' p-16 h-screen h-[100%]'>

                        <div className=" max-w-md mx-auto">
                            <div className=' bg-white p-16 rounded-2xl drop-shadow-xl'>
                                <p className=''>Add your Team</p>

                                <form className=' pt-[20px] ' action='#' onSubmit={handleSubmit(async(data) => {
                                    console.log(data);

                                    try {
                                        setLoading(true)
                                    const response = await axios.post("http://localhost:4040/team",data);
                                    toast.success("team added successfully!")
                                    setLoading(false);
                                    console.log(response.data.data)
                                    Navigate("/teams")
                                    } catch (error) {
                                        setLoading(false)
                                        toast.error(error.response.data.error)
                                    }

                                })}>

                                    <p className=''>Name</p>
                                    <input id= "name" type="name" {...register("TeamName", {required: 'please enter name'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.TeamName?.message}</p>

                                    <p className=''>Settings</p>
                                    <input id="wallet" defaultValue={"MINUTE"} type="TEXT" {...register("settings", {required: 'please enter email'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.SETTINGS?.message}</p>

                                    <p className=''>Description</p>
                                    <input id="description" type="description" {...register("description", {required: 'please enter email'})} className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-3"></input>
                                    <p className='text-red-700'>{errors.description?.message}</p>

                                    <div className='flex gap-x-20'>
                                    <Link to ="/teams"><button type='submit' className='rounded-md border-solid border-2 border-x-emerald-900 p-2  rounded-md w-[90px] hover:bg-emerald-400 hover:border-solid hover:border-3 hover:border-x-white  mt-2'>Go Back</button></Link>

                                    <button type='submit' className='flex  rounded-md border-solid border-2 border-x-emerald-900 p-2  rounded-md w-[90px] hover:bg-emerald-400 hover:border-solid hover:border-3 hover:border-x-white  mt-2'>
                                        
                                        {loading && (<>
                                            <div className="grid-1 my-auto h-2 w-2 mx-3 border-t-transparent border-solid animate-spin rounded-full border-black border-4 "></div>            
                                            <div className="grid-2 my-auto -mx-1"> </div>
                                           
                                        
                                        </>)}
                                        
                                        
                                        AddTeam</button>
                                    <ToastContainer/>
                                    </div>

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
