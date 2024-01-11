import {Link,NavLink} from "react-router-dom";

const Header=()=>{
    const navLinkStyles=({isActive})=>{
        return{
            textDecoration: isActive? "none": "underline",
            color: isActive? "red": "black"
        };
    }
    return (
        <div className="header">
            <NavLink style={navLinkStyles} to={'/'}><h2 style={{cursor:"pointer"}}
            >Home</h2></NavLink>
            <NavLink style={navLinkStyles} to={'/about'}><h2 style={{cursor:"pointer"}}
            >About</h2></NavLink>
            <NavLink style={navLinkStyles} to={'/contact'}><h2 style={{cursor:"pointer"}}
            >Contact</h2></NavLink>
        </div>
    )
}
export default Header;