import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => (
    <nav>
        <NavLink exact to="/" className="nav-link" activeClassName="nav-link__active">Home</NavLink>
        <NavLink to="/movies" className="nav-link" activeClassName="nav-link__active">Movies</NavLink>
    </nav>
)

export default Navigation;