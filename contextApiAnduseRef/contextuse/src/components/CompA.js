import CompB from "./CompB";

const CompA=(props)=>{
    return (
        <div className="compA">
            <h2>compA</h2>
            <CompB data={props.data} 
            name={props.name.name}
            addr={props.name.addr}/>
        </div>
    );
}
export default CompA;