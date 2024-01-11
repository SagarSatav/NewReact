
export default function CoreConcepts({image,title,description}){
    return (
      <li>
        <img src={image}></img>
        <p>{title}</p>
        <p>{description}</p>
      </li>
    );
  }
  