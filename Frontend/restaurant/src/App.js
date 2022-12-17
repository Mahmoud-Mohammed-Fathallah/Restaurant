import './App.css';
import HomePage from './HomePage/HomePage';

import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp';
import Page from './Page';
import CustomerMenu from'./CustomerMenu/CustomerMenu'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/CustomerMenu" element={<CustomerMenu />} />


      </Routes>
    </Router>
  );

}



export default App;