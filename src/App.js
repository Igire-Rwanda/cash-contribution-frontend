import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewTeams from "./components/ViewTeams";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import CreateTeam from "./components/CreateTeam";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Team from "./components/Team";
import DashBoardSection from "./components/DashBoardSection";
import Transactions from "./components/Transactions";
import Dashb from "./components/Dashb";
import Settings from "./components/Settings";
import Dashboard from "./pages/Dashboard";
import TeamMembers from "./components/TeamMembers";
import Footer from "./components/Footer";
import JoinTeam from "./components/JoinTeam";
import Contribution from "./components/Contribution";
import PaymentResult from "./components/PaymentResult";

const App = () => {
    return (

        <>
            <div className=''>
                {/* <Nav /> */}
            </div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/addteam" element={<CreateTeam />}></Route>
                    <Route path="/viewteams" element={<ViewTeams />}></Route>
                    <Route path="/footer" element={<Footer/>}></Route>
                    <Route path="/signup" element={<Signup/>}/>
                    {/* <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route> */}
                    <Route  path='/signin' element={<Login/>}/>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/teams" element={<Dashboard />}/>
                    <Route path="/dashboard" element={<Dashb />}>
                            <Route path='' element={<DashBoardSection />} />
                            <Route path="teammembers" element={<TeamMembers/>}/>
                            <Route path="contribution" element={<Contribution/>}/>
                            <Route path="jointeam/:id" element={<JoinTeam />}/>
                         <Route path='team' element={<Team />} />
                         <Route path='transactions' element={<Transactions />} />
                         <Route path='settings' element={<Settings />} />
                         <Route path="paymentresult" element={<PaymentResult />} />
                         
                    </Route>
                    
                </Routes>
            
        </>
    );
}
export default App;
