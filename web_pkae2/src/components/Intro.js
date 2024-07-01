import logo from "../Assets/images/KeyboardSquidLogoFullTransparent.png";
import styles from "./Intro.module.css";
import {Link} from 'react-router-dom';

export default function Intro(){    
    return(
        <div className="container-md text-center">
            <Link to={`/`}>
                <img src={logo} className={styles.logo}></img>
            </Link>
        </div>
    )

}