import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcompo from './Components/Navcompo';
import { Routes,Route } from "react-router-dom";
import BMICalculator from './pages/BMICalculator';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Legs from './pages/Legs';
import { SliderData3 } from './pages/SliderData3';
import ImageSlider from './pages/ImageSlider';
import { SliderData } from './pages/SliderData';
import Arms from './pages/Arms';
import { SliderData2 } from './pages/SliderData2';
import Back from './pages/Back';
import { SliderData4 } from './pages/SliderData4';
import Homie from './pages/Homie';
import Diet1 from './pages/Diet1';
import Diet2 from './pages/Diet2';
import Diet3 from './pages/Diet3';
import AboutPage from './pages/AboutPage';



function BMI() {
  return (
    <div className="Appp">
      <>
      <div className="center-container">
      <BMICalculator />
      </div>
      </>
    </div>
  );
}
function Logedin() {
  return (
    <div className="App">
      <>
      <Login />
      </>
    </div>
  );
}
function Signedin() {
  return (
    <div className="App">
      <>
      <Signup />
      </>
    </div>
  );
}
function Homn() {
  return  <Homie />;
}
function Leger() {
    return <Legs slides={SliderData3} />;
}
function Chest() {
  return <ImageSlider slides={SliderData} />;
}
function Arm() {
  return <Arms slides={SliderData2} />;
}
function Backi() {
  return <Back slides={SliderData4} />;
}

function Deti() {
  return <Diet1 />;
}
function Deta() {
  return <Diet2 />;
}
function Detu() {
  return <Diet3 />;
}

function Abot() {
  return <AboutPage />;
}


function App() {
  return (
    <div className="App">
      <>
      <Navcompo/>
      </>
    
    <Routes>
      <Route path="/home" element={<Homn />}>
      </Route>

     

      <Route path="/bmi" element={<BMI />}>
      </Route>
      
      <Route path="/login" element={<Logedin />}>
      </Route>

      <Route path="/sign" element={<Signedin />}>
      </Route>

      <Route path="/legs" element={<Leger />}>
      </Route>
      
      <Route path="/chest" element={<Chest />}>
      </Route>

      <Route path="/arms" element={<Arm />}>
      </Route>

      <Route path="/back" element={<Backi />}>
      </Route>

      <Route path="/diet" element={<Deti />}>
      </Route>

      <Route path="/dietu" element={<Deta />}>
      </Route>

      <Route path="/dieto" element={<Detu />}>
      </Route>

      <Route path="/About" element={<Abot />}>
      </Route>



    </Routes>
    </div>
  );
}


export default App;
