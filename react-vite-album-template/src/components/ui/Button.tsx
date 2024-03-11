interface ButtonProp {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: ButtonProp) => {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
