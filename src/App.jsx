import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Rewards from "./Pages/Rewards";
import Staking from "./Pages/Staking";



function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-950 to-purple-950 px-10 md:px-0">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<UserDashboard className="" />} />
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/rewards" element={<Rewards/>}/>
          <Route path="/staking" element={<Staking/>}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
