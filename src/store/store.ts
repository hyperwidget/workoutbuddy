import { combineReducers } from 'redux';
import * as counter from './counter';
import * as session from './session';
import * as exercise from './exercise';


export interface IAppState {
  counter?: counter.ICounter;
  session?: session.ISession;
  exercise?: exercise.IExercise;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counter.counterReducer,
  session: session.sessionReducer,
  exercise: exercise.exerciseReducer,
});

export function deimmutify(store) {
  return {
    counter: store.counter.toJS(),
    session: store.session.toJS(),
    exercise: store.session.toJS(),
  };
}

export function reimmutify(plain) {
  return {
    counter: counter.CounterFactory(plain.counter),
    session: session.SessionFactory(plain.session),
    exercise: session.SessionFactory(plain.session),
  };
}
