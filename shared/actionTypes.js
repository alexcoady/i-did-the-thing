// @flow
export const RECORD_CREATE = 'RECORD_CREATE';
export const RECORD_DELETE = 'RECORD_DELETE';
export const RECORD_UPDATE = 'RECORD_UPDATE';

type RootRecord = {
  date: number,
};

type TestRecord = RootRecord & {
  _id: string,
};

export type Action = 
  { type: 'RECORD_CREATE', payload: RootRecord } |
  { type: 'RECORD_DELETE', payload: string } |
  { type: 'RECORD_UPDATE', payload: TestRecord };
