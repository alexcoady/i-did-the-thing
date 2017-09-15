// @flow
// App dependencies
import type { Record } from 'shared/records/types';

export const RECORD_CREATE = 'RECORD_CREATE';
export const RECORD_DELETE = 'RECORD_DELETE';
export const RECORD_UPDATE = 'RECORD_UPDATE';

export type Action = 
  { type: 'RECORD_CREATE', payload: Record } |
  { type: 'RECORD_DELETE', payload: string };
