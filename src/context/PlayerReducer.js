const playerReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.data,
      };

    default:
      break;
  }
};

export default playerReducer;
