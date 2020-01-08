const initalState = [];

export default function(state = initalState, action){
	switch(action.type) {
		case 'CATEGORIES_SELECTED':
      return [...state, action.payload];
    case 'CATEGORY_UNSELECTED':
      return state.filter((word) => {return word !== action.payload});
    case 'CATEGORIES_DESELECTED':
      return initalState;
    default:
      return state;
  }
}
