import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col w-full">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
