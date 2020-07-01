import {
  INCREASE,
  DECREASE,
  INCREASE_BY,
  DECREASE_BY,
  increase,
  decrease,
  increaseBy,
  decreaseBy
} from "store/actions";

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof decreaseBy>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    case DECREASE_BY:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default counter;
