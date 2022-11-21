import React from 'react'
import { Link } from 'react-router-dom'

function CreateTeam() {
    return (
        <div>
            <>
                <div className=''>
                    <div className=' p-16 h-screen h-[100%]'>

                        <div className=" max-w-md mx-auto">
                            <div className=' bg-white p-16 rounded-2xl drop-shadow-xl'>
                                <p className=''>Add your Team</p>

                                <form className=' h-[75vh] pt-[20px]'>
                                    <p className=''>Name</p>
                                    <input type="text" className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-2"></input>

                                    <p className=''>Email</p>
                                    <input type="text" className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-2"></input>

                                    <p className=''>Members</p>
                                    <input type="text" className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-2"></input>

                                    <p className=''>Description</p>
                                    <input type="text" className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-2"></input>

                                    <p className=''>Password</p>
                                    <input type="text" className=" border-solid border-2 border-emerald-90 w-full py-2 px-3 rounded focus:outline my-2"></input>

                                    <Link to='/' className=''><button className='rounded-md border-solid border-2 border-x-emerald-900 p-2  rounded-md w-[100px] hover:bg-emerald-900 hover:border-solid hover:border-2 hover:border-x-white  mt-2'>Add Team</button></Link>

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
