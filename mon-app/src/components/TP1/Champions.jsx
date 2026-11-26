export default function Champions(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Type: {props.type}</p>
      <p>{props.favori ? 'Favori' : 'Pas favori'}</p>
    </div>
  );
}