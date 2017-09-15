// @flow
// NPM dependencies
import { combineReducers } from 'redux';

// App dependencies
import { RECORD_CREATE } from 'shared/actionTypes';
import type { Action } from 'shared/actionTypes';

// Feature dependencies
import type { RecordDictionary } from './types';

const idList = (state: string[] = [], action: Action) => {
  
  switch (action.type) {
    case RECORD_CREATE: {
      return state.concat(action.payload._id);
    }
  }

  return state;
};

const dictionary = (state: RecordDictionary = {}, action: Action) => {
  
  switch (action.type) {
    case RECORD_CREATE: {
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    }
  }

  return state;
};

export default combineReducers({
  idList,
  dictionary,
});
