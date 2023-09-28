const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((list) => list.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "UPDATE_TODO":
      const { selectedId, inputData } = action.payload;
      const result = state.list.map((item) =>
        item.id === selectedId ? { id: selectedId, data: inputData } : item
      );
      return {
        ...state,
        list: result,
      };

    default:
      return state;
  }
};

export default todoReducer;
