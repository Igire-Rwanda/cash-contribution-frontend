import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import CreateTeam from "./components/CreateTeam";
import ViewTeams from "./components/ViewTeams";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";


const App = () => {
    return (

        <>

            <div className=''>
                <Nav />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/addteam" element={<CreateTeam />}></Route>
                    <Route path="/viewteams" element={<ViewTeams />}></Route>
                    <Route path="/signup" element={<Signup/>}/>
                    {/* <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route> */}
                    <Route  path='/signin' element={<Login/>}/>
                </Routes>
            </div>
        </>
    );
                }
export default App;
