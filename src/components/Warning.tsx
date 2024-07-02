// HOC -Higher Order Component

type Props = {
  children: string;
};

function Warning({ children }: Props) {
  return (
    <div className="warn-container">
      <h2>{children}</h2>
    </div>
  );
}

export default Warning;
