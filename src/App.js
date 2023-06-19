import Navbar from "./Componets/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./Componets/Home";
import About from "./Componets/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
