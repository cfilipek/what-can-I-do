import { combineReducers } from 'redux';
import InterestReducer from './reducer_interests';
import ActiveInterest from './reducer_active_interest';
import ActiveCategories from './reducer_active_categories';


const rootReducer = combineReducers({
  interests: InterestReducer,
  activeInterest: ActiveInterest,
  activeCategories: ActiveCategories
});

export default rootReducer;
