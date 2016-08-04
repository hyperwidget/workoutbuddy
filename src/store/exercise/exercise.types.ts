import {TypedRecord} from 'typed-immutable-record';

export interface IExercise {
  id: number;
  name: string;
  bodypart: string;
};

export interface IExerciseRecord extends TypedRecord<IExerciseRecord>, IExercise {
};
