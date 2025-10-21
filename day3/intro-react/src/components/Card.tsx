interface CardProps {
  name: string;
  hobby?: string;
}

function Card(props: CardProps) {
  return (
    <div style={{ width: "200px", height: "300px", border: "1px solid black" }}>
      <p>{props.name}</p>

      {props.hobby ? <p>{props.hobby}</p> : null}
    </div>
  );
}

export default Card;
