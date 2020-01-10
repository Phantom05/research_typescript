const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = 0;
type Action = {type:'counter/INCREMENT'} | {type:'counter/DECREMENT'};
const counter = (state:number = initialState, action:Action):number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;