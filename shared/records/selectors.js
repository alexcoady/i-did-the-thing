// @flow
// NPM dependencies
import moment from 'moment';
import { createSelector } from 'reselect';

// App dependencies
import type { RootState } from 'shared/types';

// Feature dependencies
import { NAME } from './constants';

const getIdList = (state: RootState) => state[NAME].idList;
const getDictionary = (state: RootState) => state[NAME].dictionary;

const getAll = createSelector(
  getIdList,
  getDictionary,
  (ids, dict) => ids.map(id => dict[id])
);

export const getTodayRecord = createSelector(
  getAll,
  all => all.find(record => moment(record.timestamp).isSame(moment(), 'day'))
);
