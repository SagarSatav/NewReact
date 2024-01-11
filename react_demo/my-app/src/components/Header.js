import CoreConcepts from "./CoreConcepts";
import img from "../logo512.png";
import "./header.css"

const description=["good","very good","bad","very bad"]

const randomNum=(num)=>{
    return Math.floor(Math.random()*(num+1));
}

const Header=()=>{
    const desc=description[randomNum(3)];
    return (
        <div>
            <h3>{desc} starting react project</h3>
            <div style={{backgroundColor:"pink"}} className="header">
               {/* //inline css */}
                <b>React Project demo</b>
                <ul>
                <CoreConcepts 
                image={img}
                title="hello world"
                />
                </ul>
            </div>
        </div>

    );

}
export {Header}