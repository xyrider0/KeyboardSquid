import {Outlet} from "react-router-dom"

//js
import Footer from './components/Footer/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';

//css
import style from './style.module.css';


function App() {
  return (
    <>
    <div className="Header">
      <Navbar></Navbar>
    </div>
    <div className="App">
      <Outlet />
      </div>
    <div className="Footer">
      <Footer></Footer>
    </div>
    </>
    )
}

export default App;
