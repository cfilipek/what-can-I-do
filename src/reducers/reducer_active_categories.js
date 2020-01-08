export default function(state = [], action){
	switch(action.type) {
		case 'CATEGORIES_SELECTED':
      return [...state, action.payload];
    case 'CATEGORY_UNSELECTED':
      console.log((state.filter((word) => (word !== action.payload))), 'action')
      return state.filter((word) => {return word !== action.payload});
    case 'CATEGORIES_DESELECTED':
      return state = [];
    default:
      return state;
  }
}
