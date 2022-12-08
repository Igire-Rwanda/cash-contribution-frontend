import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";

function Contribution() {

    const [Payment, setPayment] = useState([])
    const [team, setTeamId] = useState(null)

    const getPayment = async (teamId) => {
      const response = await axios.get(`http://localhost:4040/team/contributions/${teamId}`);
      console.log(response.data)
      setPayment(response.data);
    }
    useEffect(() => {
      const teamId = localStorage.getItem("team");
      if (teamId) {
        setTeamId(teamId)
        getPayment(teamId);
      }

    }, [])
    return (
        <>

            <div className="h-full mx-[17%] mt-[2%] mx-auto">

                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-2">
                    <header className="flex px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Team Contributions</h2>

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
                                            <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">Amount</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">Date</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="hover:text-gray-800 hover:text-sm font-semibold text-left">status</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="hover:text-gray-800 hover:text-sm font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100 ">


                                    {Payment.map((payment) => (
                                    <tr>
                                        <td className="p-2 pl-[40px] whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="text-lg font-medium text-gray-800">
                                                    {payment.UserId.names}
                                                </div>
                                            </div>
                                        </td>


                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{payment.amount}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">2020-11-30</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-gray-800">
                                            {payment.status}
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex text-center mx-auto">
                                            {payment.status!='success' ? (
                                                 <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">

                                                 <input type="hidden" name="public_key" value="FLWPUBK_TEST-6bc5d88fcdec511b2c471af46b19f081-X" />
                                                 <input type="hidden" name="tx_ref" value={payment._id} />
                                                 <input type="hidden" name="amount" value={payment.amount} />
                                                 <input type="hidden" name="currency" value="RWF" />
                                                 <input type="hidden" name="redirect_url" value="http://localhost:3000/dashboard/paymentresult" />
                                                 <input type="hidden" name="meta[token]" value="54" />
                                                 <input type="hidden" name="customer[name]" value={payment.UserId.names} />
                                                 <input type="hidden" name="customer[email]" value={payment.UserId.email} />
                                                 <button
                                                     type="submit"
                                                     class="border ml-[80px] w-[60%] border-emerald-900 bg-emerald-900 text-white rounded-md  py-2  transition duration-500 ease select-none hover:border-emerald-900 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                                                 >
                                                     Pay
                                                 </button>
                                             </form>
                                            ) :  ( <button
                                                class="border ml-[80px] w-[60%] bg-green-500 text-white rounded-md  py-2  transition duration-500 ease select-none hover:border-emerald-900 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                                            >
                                                Paid
                                            </button>)}
                                               


                                            </div>
                                        </td>
                                    </tr>
                                     ))} 

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contribution
