import Card from './Card';
/*import styles from './Card.module.css'*/

export default function Cards(props) {
   const { characters } = props;
   return <div>
      
      {characters.map(char => <Card
         name = {char.name}
         species = {char.species}
         gender = {char.gender}
         image = {char.image}
         onClose = {() => window.alert('simulamos que se cierra la ventana')}
         />)
      }
   </div>;
}
