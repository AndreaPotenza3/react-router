import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className='menu'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/list'>Character List</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
        </ul>
    )
}