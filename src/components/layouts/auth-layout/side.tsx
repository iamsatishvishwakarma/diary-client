interface IProps {
  children: React.ReactNode;
}
const Side = (props: IProps) => {
  return <div>{props.children}</div>;
};

export default Side;
