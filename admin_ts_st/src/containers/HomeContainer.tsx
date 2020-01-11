import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/modules";
import { increase, decrease, increaseBy, decreaseBy } from "store/actions";
import Counter from "components/test/Counter";

import logo from "static/icons/logo.svg";
import "components/App.css";

//g
// import { gql } from "apollo-boost";
// import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

interface defaultProps {
  [key: string]: any;
}

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

function HomeContainer(): ReactElement {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  const onDecreaseBy = (diff: number) => {
    dispatch(decreaseBy(diff));
  };
  const onGraphQL = () => {
    console.log(`onGraphQL`);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
            onDecreaseBy={onDecreaseBy}
            onGraphQL={onGraphQL}
          />
          <ul>
            {data.continents.map(({ code, name }: defaultProps) => (
              <li key={code}>{name}</li>
            ))}
          </ul>
          
        </header>
      </div>
    </div>
  );
}

export default HomeContainer;
