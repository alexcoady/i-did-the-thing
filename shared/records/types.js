// @flow

export type Status = 'YES' | 'NO';

export type RootRecord = {
  timestamp: number,
  status: Status,
};

export type Record = RootRecord & {
  _id: string,
};

export type RecordDictionary = {
  [string]: Record,
};

export type RecordState = {
  idList: string[],
  dictionary: RecordDictionary,
};
