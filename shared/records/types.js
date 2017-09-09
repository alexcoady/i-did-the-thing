// @flow

export type Status = 'YES' | 'NO';

export type RootRecord = {
  timestamp: number,
  status: Status,
};

export type Record = RootRecord & {
  _id: string,
};
