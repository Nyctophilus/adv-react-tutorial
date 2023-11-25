import { REMOVE_ITEM, RESET, CLEAR } from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR)
    return { ...state, people: [] };

  if (action.type === RESET)
    return { ...state, people: action.value };

  if (action.type === REMOVE_ITEM) {
    const newpeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newpeople };
  }

  throw new Error(
    `No matching "${action.type}" - action type.`
  );
};
