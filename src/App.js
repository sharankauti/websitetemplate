import Header from "./Componets/Header/Header";
import { Route,Routes} from "react-router-dom";
import Home from "./Componets/Home/Home";
import Footers from '../src/Componets/Footer/Footers'
import Login from "./Componets/Login/Login";
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Footer/> */}
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footers/>
      
    </div>
  );
}

export default App;
