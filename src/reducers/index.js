import { combineReducers } from 'redux';
import InterestReducer from './reducer_interests';
import ActiveInterest from './reducer_active_interest';

const rootReducer = combineReducers({
  interests: InterestReducer,
  activeInterest: ActiveInterest
});

export default rootReducer;
