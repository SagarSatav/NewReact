import propTypes from 'prop-types'
import CoreConcepts from './CoreConcepts';

const Students=(props)=>{
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.rollNum}</h3>
            <CoreConcepts name={props.name} />
            {/**from child to child render */}
        </div>
    );
}

Students.propTypes={
    name:propTypes.string,
    rollNum:propTypes.number
}

Students.defaultProps={
    name:"Name",
    rollNum:0
}
export default Students;