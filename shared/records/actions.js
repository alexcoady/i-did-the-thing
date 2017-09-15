// @flow
// NPM dependencies
import uuid from 'uuid/v1';

// App dependencies
import { RECORD_CREATE } from 'shared/actionTypes';
import type { Action } from 'shared/actionTypes';

// Feature dependencies
import type { Record, RootRecord } from './types';

const normaliseRecord = (record: RootRecord | Record): Record => ({
  ...record,
  timestamp: typeof record.timestamp === 'number' ? record.timestamp : Date.now(),
  _id: typeof record._id === 'string' ? record._id : uuid(),
});

export const create = (payload: RootRecord): Action => ({
  type: RECORD_CREATE,
  payload: (normaliseRecord(payload): Record),
});
