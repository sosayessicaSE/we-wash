export default function ServiceCard({ title, description, imageUrl }) {
    return (
      <div className="serviceCard">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  