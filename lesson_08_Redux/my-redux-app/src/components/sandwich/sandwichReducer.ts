import type { Action } from "./types/Action";
import type SandwichState from "./types/SandwichState";

// начальное значение централизованного состояния
const initialState: SandwichState = {
  value: "Add ingredients: ",
};
export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
  switch (action.type) {
    case "sandwich/addBread":
    case "sandwich/addCheese":
    case "sandwich/addBacon":
    case "sandwich/addSalat":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "sandwich/reset":
      return {
        ...state,
        value: (state.value = "Add ingredients: "),
      };
    default:
      return state;
  }
}
