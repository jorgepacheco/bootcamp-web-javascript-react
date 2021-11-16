export const Note = ({ content, important }) => {
  return (
    <li>
      <p>
        <strong>{content}</strong>
      </p>
      <small>
        <time>{important}</time>
      </small>

    </li>
  );
};
