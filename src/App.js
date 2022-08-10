import Sidebar from "./components/Sidebar";
import {BiUser} from "react-icons/bi";
import {GrNotification} from "react-icons/gr";
import NisaLogo from "./images/nisa-logo.svg"
import User from "./images/team-01.png"

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
      <section className="flex-1 bg-white">Content left</section>
      <section className="w-96 bg-gray-100 rounded-tl overflow-hidden px-8">
        <div className="pt-12 flex justify-end space-x-9 items-center">
          <GrNotification size={20}/>
          <BiUser size={20}/>
          <img src={User} alt="user" className="h-9 w-9 object-cover rounded-full"/>
        </div>
        <div className="card mt-9">
          <div className="relative p-5 text-white">
            <div className="text-lg">Marcellous Nwankwo</div>
            <div className="mt-10 space-y-2">
              <div>50% Credit Rating</div>
              <div>ID12 **** 3456 7890</div>
              <div className="flex justify-between relative">
                <span>N1,200,000</span>
                <img src={NisaLogo} alt="Nisa" className="h-4"/>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </div>
  );
}
    
export default App;
