import { Action } from 'redux';
import { CounterActions } from './counter.actions';
import { SessionActions } from './session.actions';
import { ExerciseActions } from './exercise.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [ CounterActions, SessionActions, ExerciseActions ];
export { CounterActions, SessionActions, ExerciseActions };
