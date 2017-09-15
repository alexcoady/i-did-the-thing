// NPM dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// App dependencies
import records from 'shared/records/reducer';

export default combineReducers({
  form,
  records,
});
