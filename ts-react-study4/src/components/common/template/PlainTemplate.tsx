interface typeProps {
  header?: React.ReactNode[] | React.ReactNode | String;
  children?: React.ReactNode[] | React.ReactNode | String;
}
function PlainTemplate(props: typeProps) {
  return (
    <>
      <header>{props.header}</header>
      <main>{props.children}</main>
    </>
  );
}

export default PlainTemplate;
