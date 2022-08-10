import Sidebar from "./components/Sidebar";
import ContentRight from "./components/Sidebar/Content/ContentRight";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
      <section className="flex-1 bg-white">Content left</section>
      <ContentRight/>
    </div>
  );
}
    
export default App;
