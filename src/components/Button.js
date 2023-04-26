export const Button = ({ onClick, name }) => {
  return (
    <button type="button" id="btn" onclick={onClick}>
      {name}
    </button>
  );
};
