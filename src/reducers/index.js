import { setaReducerStateInput, setaReducerStatePlanet } from "./setaReducerState";
// import { OtherReducer } from "./otherReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    setaReducerStateInputStore: setaReducerStateInput,
    // otherState: otherReducer
    setaReducerStatePlanetStore: setaReducerStatePlanet
});