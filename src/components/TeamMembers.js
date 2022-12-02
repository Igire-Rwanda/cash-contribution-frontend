import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

const TeamMembers = () => {


const [Members, setMembers] = useState([])
const getMembers =async (data)=>{
    const response = await axios.get("http://localhost:4040/team/6387229da6cf953faf5eeffb",data)
    console.log(response.data.data)
    setMembers (response.data);
}
useEffect(()=>{
  getMembers();
},[])
  

  return (
    <div className="flex flex-col justify-center h-full  mx-auto">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="flex px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Team Members</h2>
      
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="flex space-x  p-2 whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm px-8 font-semibold text-left">
                      Names
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">Member Id</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">Amount</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm font-semibold text-center">Phone</div>
                  </th>
                  <th className=" whitespace-nowrap">
                    <div className="hover:text-gray-800 hover:text-sm font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 ">
                

                {Members.map((member)=>(
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                     
                      <div className="text-lg font-medium text-gray-800">
                       names 
                      </div>
                    </div>
                  </td>

                  
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{member?.UserId?._id}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{member?.UserId?.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className=" text-center">0789999654</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                ))}
                {/* <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                     
                      <div className="text-lg font-medium text-gray-800">
                        Mirko Gashumba
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1178905644</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0781006762</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border  bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                   
                      <div className="text-lg font-medium text-gray-800">
                        Olga kabatesi
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1199567809</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0783046579</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                    
                      <div className="text-lg font-medium text-gray-800">
                        Burakari charity
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1199456787</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0786464326</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
