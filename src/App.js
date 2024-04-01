
// import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
// import { Router ,Route, BrowserRouter } from 'react-router-dom';
import Signup from './Homepage/signuppage/Signup'
import Sample from './Sample';
import Home from './Homepage/Home'
import About from './Homepage/About/About'
import Cource from './Homepage/Courceabout/Cource'
import Contact from './Homepage/contactpage/Contact';
import Register from './Homepage/Register/Register';
import Admin from './Homepage/Adminpage/Admin'
// import Adminlogin from './Homepage/Adminpage/Adminlogin'
import Trainer from './Homepage/Trainerloginpage/Trainer'
import AddProduct from './Homepage/Register/Addproduct';
import Loginpage from './Homepage/loginpage/Loginpage';
import Logintr from './Homepage/Trainerloginpage/Logintr'
// import Head2 from './component/Head2';

function App() {
  return (


    <div className="App">



      {/* <Sample /> */}
      {/* <Signup /> */}

      <Routes>
      {/* <Route path='*' element={<Signup />} /> */}
     
        {/* <Route path='/' element={< Home />} /> */}
        <Route exact path="*" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <Home />
              </div>
            </div>
          }></Route>

<Route exact path="/about" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <About />
              </div>
            </div>
          }></Route>
          <Route exact path="/cource" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <Cource />
              </div>
            </div>
          }></Route>

<Route exact path="/contact" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <Contact />
              </div>
            </div>
          }></Route>



{/* <Route exact path="/register" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <Register />
              </div>
            </div>
          }></Route> */}




{/* <Route exact path="/addproduct/:_id" element={
            <div className="d-flex">
              <div className="col">
              <Sample />                
              <AddProduct />
              </div>
            </div>
          }></Route> */}


        {/* <Route path='/about' element={<About />} /> */}
        
       
        {/* <Route path='/cource' element={<Cource />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/signup' element={<Signup />} />
        
        <Route path='/register' element={<Register />} />
           <Route path='/addproduct/:_id' element={<AddProduct />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/trainer' element={<Trainer />} />
        <Route path='/Logintr' element={<Logintr />} />
       



     




      </Routes>

      {/* <Adminlogin /> */}



    </div>

  );
}






export default App;
