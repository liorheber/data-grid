// @flow

import { START_APP } from "../actions/actions";
import type { Action } from "../actions/actions";

export type SampleState = {
  label: string
};

const initState = {
  label: "Initial Label"
};

const sampleReducer = (
  state: SampleState = initState,
  action: Action
): SampleState => {
  switch (action.type) {
    case START_APP:
      return { label: "Hello world!" };
    default:
      return state;
  }
};

export default sampleReducer;
