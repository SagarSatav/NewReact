import "./header.css"
function CoreConcepts(props){
    return (
        <div className="coreConcept">
        <li>
            <img src={props.image} alt={props.title}></img>
            <h2>{props.title}</h2>
            <h3>{props.name}</h3>
        </li>
        </div>
    );
}

export default CoreConcepts;