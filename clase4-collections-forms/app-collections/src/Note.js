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
        return <p key={description}><small>{description}</small></p>;
      })}
    </li>
  );
};
