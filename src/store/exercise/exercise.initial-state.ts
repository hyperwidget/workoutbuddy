import {
  IExerciseRecord,
  IExercise,
} from './exercise.types';
import { makeTypedFactory } from 'typed-immutable-record';

export const ExerciseFactory = makeTypedFactory<IExercise, IExerciseRecord>({
  id: null,
  name: null,
  bodypart: null
});

export const INITIAL_STATE = ExerciseFactory();
