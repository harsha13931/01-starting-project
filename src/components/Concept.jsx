

export default function Concept({image ,title ,description}){
    return (
    <li>
       <img src={image} alt={title} ></img>
       <h2>{title}</h2>
       <p >{description} </p>
   
     </li>
    );
   } 