import "./App.css";
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="sideNav">
        <Sidenav></Sidenav>
      </div>
      <div className="main-course">
        <div className="navBar">
          <Navbar></Navbar>
        </div>
        <div className="list-item">
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;
