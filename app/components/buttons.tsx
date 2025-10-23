type ButtonProps = {
  children: React.ReactNode;
};

function PrimaryBtn({ children }: ButtonProps) {
  return <button className="primary-btn">{children}</button>;
}

function SecondaryBtn({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export { PrimaryBtn, SecondaryBtn };
