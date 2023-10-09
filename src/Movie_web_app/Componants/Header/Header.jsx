import { useRef, useState } from "react";
import "./style.css"; 
import { Link } from "react-router-dom";
import logoImage from "../../assets/movix-logo.png"
const Header = ()=>{
    const [close,setClose] = useState(false);  
    const searchHandel = ()=>{
        setClose(true)
    }  
    return(
        <>
         <nav className="nav__bar container">
                < Link to="/" className="movie_logo_container">
                    <img  className="movieLogo" src={logoImage} alt="Logo" /> The Movies
                </Link>
                <ul className="nav__list">
                    <li className="nav__list-item"><Link to="/explore/movie" className="link">Movies</Link></li>
                    <li className="nav__list-item"><Link to="/explore/tv" className="link">TV Shows</Link></li>
                    <li className="search__icon"style={{cursor:"pointer"}} onClick={searchHandel}><i className="fas fa-search"></i></li>
                    <div className={`search__box ${close?("show"):("hide")}`}>
                        <input type="search"   placeholder="Search for a movie or tv show..." />
                        <i className="fas fa-times" onClick={()=>setClose(false)}></i>
                    </div>
                </ul>
            </nav> 
        </>
    )
}
export default Header;