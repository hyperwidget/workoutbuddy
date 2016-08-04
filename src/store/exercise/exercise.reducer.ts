import { IPayloadAction } from '../../actions';
import { ExerciseActions } from '../../actions/exercise.actions';
import { IExerciseRecord } from './exercise.types';
import {
  INITIAL_STATE,
} from './exercise.initial-state';


export function exerciseReducer(
  state: IExerciseRecord = INITIAL_STATE,
  action: IPayloadAction): IExerciseRecord {

  switch (action.type) {
  case ExerciseActions.GET_ALL:
    return state.merge({
      id: null,
      name: null,
      bodypart: null,
    });
  case ExerciseActions.GET_ALL_SUCCESS:
    return state.merge({
      id: 1,
      name: 'Yep',
      bodypart: 'All',
    });
  default:
    return state;
  }
}
