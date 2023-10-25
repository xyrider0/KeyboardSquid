import {Outlet} from "react-router-dom"

//js
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
//css
import style from './style.module.css';

function App() {
  return (
    <>
    <div className="Header">
      <Intro></Intro>
      <Navbar/>
    </div>
    <div className={style.content}>
      <Outlet />
    </div>
    <div className="Footer">
      <Footer/>
    </div>
    </>
    )
}

export default App;
