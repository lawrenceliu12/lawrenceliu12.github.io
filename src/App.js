import './App.css';
// import TopBar from './TopBar/Topbar';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from './Parts/Home' 
// import Projects from './Parts/Projects' 
// import Experiences from './Parts/Experiences' 
// import Contact from './Parts/Contact' 

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Parts/Home'


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <h1>
//         yuh
//       </h1>
//       {/* <Navbar /> */}
//       {/* <Router>
//         <Routes>
//           <Route path = "/" element = {<Home />} />
//           <Route path = "/projects" element = {<Projects />} />
//           <Route path = "/experiences" element = {<Experiences />} />
//           <Route path = "/contact" element = {<Contact />} />
//         </Routes>
//       </Router> */}
//     </div>
//   );
// }
