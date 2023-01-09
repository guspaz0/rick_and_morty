import styles from './Card.module.css'
export default function Card(props) {
   // const name = props.name
   // const species = props.species
   // const gender = props.gender
   // const image = props.image

   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <img src={props.image} alt=""/>
         <p>{props.name}</p>
         <h2>{props.species}  {props.gender}</h2>

      </div>
   );
}
