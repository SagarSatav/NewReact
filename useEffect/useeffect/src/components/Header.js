import {Link} from "react-router-dom";
const Header=()=>{
    return (
        <div className="header">
            <Link to={'/'}><h2 style={{cursor:"pointer"}}
            >Home</h2></Link>
            <Link to={'/about'}><h2 style={{cursor:"pointer"}}
            >About</h2></Link>
            <Link to={'/contact'}><h2 style={{cursor:"pointer"}}
            >Contact</h2></Link>
        </div>
    )
}
export default Header;