import Card from "../Card/Card";
import { cardsClass } from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={cardsClass}>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          onClose={props.onClose}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin.name}
        />
      ))}
    </div>
  );
}
