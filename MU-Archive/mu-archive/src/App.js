import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';



function App() {
  return (
    <Router>
        < Navbar/>
        <Routes></Routes>
   </Router>
         
  );
}

export default App;
