import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [teams, setTeams] = useState([])
  const navigate = useNavigate();
  const getMyTeams = async (tkn) => {
    const response = await axios.get("http://localhost:4040/team", {
      headers: {
        Authorization: token || tkn
      }
    })
    setTeams(response.data);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setToken(token)
      getMyTeams(token)
    } else {
      navigate("/signin")
    }

  }, []);
  return (

    <div>
      {isLoggedIn && (
        <>
          <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-4 gap-4">

            {teams.map((team)=>(
              <Link to="/dashboard"><div class="bg-emerald-900 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-emerald-1000 dark:border-gray-600 text-white font-medium group">
              <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div class="text-right">
                <p class="text-2xl">{team.TeamId.TeamName}</p>
                <p></p>
              </div>
            </div>
            </Link>
            ))}
            

            
            
            
            
            <div class="bg-emerald-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-emerald-1000 dark:border-gray-600 text-white font-medium group">
              <div class="flex justify-center items-center w- h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */}
              </div>
              <div class="text-right">
                <p class="text-2xl"></p>
                <Link to="/addteam" className=''><button className='rounded-full bg-emerald-500 w-[110px] p-2 h-[7vh] mt-[0px] ml-[10%]'>CreateTeam</button></Link>
                <p></p>
              </div>

            </div>


          </div>


        </>
      )}


    </div>

  );
}

export default Dashboard;
