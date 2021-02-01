import { PlainTemplate } from "src/components/common/template";
// import { PlainTemplate } from "react-hc";
import { Header } from "src/components/common/header";
import { useImmer } from "use-immer";

import { test } from "src/lib/utils";

const HomeState = {
  hello: "world",
};
test();

function Home() {
  const [values, setValue] = useImmer(HomeState);

  const handleClick = () => {
    setValue((draft) => {
      draft.hello = "what";
    });
  };
  return (
    <PlainTemplate header={<Header />}>
      <button onClick={handleClick}>Click</button>
      <div>{values.hello}</div>
    </PlainTemplate>
  );
}

export default Home;
