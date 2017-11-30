export const START_APP = "START_APP";

export type Action = {
  type: string,
  payload: any
};

export const startApp = (): Action => ({
  type: START_APP
});
