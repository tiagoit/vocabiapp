export const START_LOAD = 'START_LOAD';
export const STOP_LOAD = 'STOP_LOAD';

export const startLoadAction = (resource) => ({ type: START_LOAD, resource });
export const stopLoadAction = (resource) => ({ type: STOP_LOAD, resource });
