import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";

const TeamMembers = () => {


  const [Members, setMembers] = useState([])
  const [team, setTeamId] = useState(null)

  const getMembers = async (teamId) => {
    const response = await axios.get(`http://localhost:4040/team/${teamId}`);
    console.log(response.data.data)
    setMembers(response.data);
  }
  useEffect(() => {
    const teamId = localStorage.getItem("team");
    if (teamId) {
      setTeamId(teamId)
      getMembers(teamId);
    }

  }, [])


  return (
    <div className="h-full mx-[17%] mt-[2%] mx-auto">

      <div className="ml-[722px]">
        <RWebShare

          site={["whatsapp", "twitter", "linkedin", "copy", "mail", "telegram"]}
          data={{
            text: "Better save with e-BIKA",
            url: `http://localhost:3000/dashboard/jointeam/${team}`,
            title: "Invite member",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className="flex border-2 border-solid border-emerald-900 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-4 pt-[8px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>

            <span className="text-emerald-900">Invite Member</span>
          </button>
        </RWebShare>
      </div>

      <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-2">
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


                {Members.map((member) => (
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
                          class="border border-emerald-900 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-emerald-900 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
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

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamMembers;