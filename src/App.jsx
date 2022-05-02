import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import FAQs from './components/FAQs';
import Compiler from './components/Compiler/Compiler';



class App extends Component {
  render() {
  
    const slash = () => {
      return(
        <div>
          <Home/>
        </div>
      );
    }
  
    return (
    <Router>
      <Routes>
          <Route  path='/' element={< Home />}></Route>
          <Route exact path='/FAQs' element={< FAQs />}></Route>
          <Route exact path='/compiler' element={< Compiler />}></Route>
          {/* <Route exact path='/about' element={< About />}></Route> */}
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
    </Router>
    );
  }
}

// function App() {
//   return (
//     <>
//     <Nav/>
//     <div className='container'>
      
//     </div>
//     <Footer/>

//     <Router
//       ><Routes>
//         <Route  path='/' element={< Nav />}></Route>
//         <Route exact path='/FAQs' element={< FAQs />}></Route>
//       </Routes>
//     </Router>
//     </>
//   )
// }

export default App