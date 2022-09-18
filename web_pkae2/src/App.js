import {Outlet} from "react-router-dom"

//js
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';

//css
import style from './style.module.css';

function App() {
  return (
    <>
    <div className="Header">
      <Navbar></Navbar>
    </div>
    <div className={style.content}>
      <Outlet />
    </div>
    <div className="Footer">
      <Footer></Footer>
    </div>
    </>
    )
}

export default App;
