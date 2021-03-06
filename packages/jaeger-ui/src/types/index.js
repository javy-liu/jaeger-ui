// @flow

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * All timestamps are in microseconds
 */

type KeyValuePair = {
  key: string,
  value: any,
};

export type Log = {
  timestamp: number,
  fields: Array<KeyValuePair>,
};

export type Process = {
  serviceName: string,
  tags: Array<KeyValuePair>,
};

export type SpanReference = {
  refType: 'CHILD_OF' | 'FOLLOWS_FROM',
  spanID: string,
  traceID: string,
};

export type SpanData = {
  spanID: string,
  traceID: string,
  processID: string,
  operationName: string,
  startTime: number,
  duration: number,
  logs: Array<Log>,
  tags: Array<KeyValuePair>,
  references: Array<SpanReference>,
};

export type Span = SpanData & {
  depth: number,
  hasChildren: boolean,
  process: Process,
  relativeStartTime: number,
};

export type TraceData = {
  processes: { [string]: Process },
  traceID: string,
};

export type Trace = TraceData & {
  duration: number,
  endTime: number,
  spans: Span[],
  startTime: number,
};
