import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import cardsReducer from "./cardsReducer";
import boardsReducer from "./boardsReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  activeBoard: activeBoardReducer,
});
