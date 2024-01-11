const Movie=(props)=>{
    return(
        <div className="movie">
            <img src={props.img}></img>
            <p>{props.title}</p>
            <p>year :{props.year}</p>
        </div>
    )
}

export default Movie;