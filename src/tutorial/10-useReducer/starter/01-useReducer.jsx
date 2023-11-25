import { useReducer } from "react";
import { data } from "../../../data";
import { REMOVE_ITEM, RESET, CLEAR } from "./actions";
import { reducer } from "./reducer";

const initState = { people: data, isLoading: false };

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const removeItem = (id) =>
    dispatch({ type: REMOVE_ITEM, payload: { id } });

  const clearList = () => dispatch({ type: CLEAR });
  const resetList = () =>
    dispatch({ type: RESET, value: data });

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
