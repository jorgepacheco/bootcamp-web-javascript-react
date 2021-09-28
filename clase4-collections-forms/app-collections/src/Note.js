export const Note = ({ descriptions = [], content, date }) => {
  return (
    <li>
      <p>
        <strong>{content}</strong>
      </p>
      <small>
        <time>{date}</time>
      </small>
      {descriptions.map((description) => {
        return <p><small key={description}>{description}</small></p>;
      })}
    </li>
  );
};
