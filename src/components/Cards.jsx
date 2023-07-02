import Card from "./Card";

export default function Cards(props) {
  return (
    <div className="Cards">
      {props.characters.map((pj) => {
        return (
          <Card
            onClose={props.onClose}
            id={pj.id}
            name={pj.name}
            status={pj.status}
            species={pj.species}
            gender={pj.gender}
            origin={pj.origin}
            image={pj.image}
          />
        );
      })}
    </div>
  );
}
