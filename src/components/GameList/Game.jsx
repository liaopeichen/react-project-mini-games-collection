export default function Game({ title, url, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <a href={url}>
        <button className="btn" data-content={title}>
          {title}
        </button>
      </a>
      <p>{description}</p>
    </li>
  );
}
