interface Props {
  onclick: () => void;
}
const Button = ({ onclick }: Props) => {
  return (
    <button className="btn btn-success" onClick={onclick}>
      Button
    </button>
  );
};

export default Button;
