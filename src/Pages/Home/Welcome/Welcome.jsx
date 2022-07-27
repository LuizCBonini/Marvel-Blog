import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Style:
import './Welcome.css'

// Images:
import Escadas from '../../../assets/imgs/SET_DrStrange_02_cumprimido.webp'
import Iron from '../../../assets/imgs/Intersect.png'

const Home = () => {
    return ( 
        <div className='welcome'>
            <img src={Escadas} alt="Escadas do templo do Dr.Strange" className='background'/>
            <h1>Welcome to Name</h1>
            <p>Tenha as ultimas noticias do universo compartilhado Marvel e historias em quadrinhos.</p>

            <img src={Iron} alt="Imagem do Iron Man" className='capa'/>
            
            <ul className="arcos">
                <li>
                    <Link to="/mistico">Místico</Link>
                </li>
                <li>
                    <Link to="/terrestre">Terrestre</Link>
                </li>
                <li>
                    <Link to="/cosmico">Cósmico</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Home;