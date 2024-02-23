import "./Game.css";

export default function Game({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <button className="btn" data-content={title}>
        {title}
      </button>
      <p>{description}</p>
    </li>
  );
}
