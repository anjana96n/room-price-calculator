//import logo from "./logo.svg";
// import './App.css';
import Cost from "./components/Cost";
//import Form from "./components/FormData";

function App() {
  return (
    <div className="App max-h-screen py-6 px-12">
      <div className="sm:grid grid-cols-5 gap-4">
        <div className="col-span-2 border border-1 border-gray-400 rounded-lg"></div>
        <div className="col-span-3">
          <div className="border border-1 rounded-lg border-gray-400">
            <Cost adultCost={2000} childrenCost={5000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
