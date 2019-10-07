import { combineReducers } from 'redux';

import testDuck from './ducks/testDuck';

export default combineReducers({
  testState: testDuck,
});
