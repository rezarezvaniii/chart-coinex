import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  language: "fa",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}

 const store = configureStore({
  reducer: reducer,
});
export default store;



// import { configureStore} from "@reduxjs/toolkit";
// import counterSlice from "./slice store/counterSlice";





// const store = configureStore({
//     reducer:{counterSlice}
// })

// export default store;