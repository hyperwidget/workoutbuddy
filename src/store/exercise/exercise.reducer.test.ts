// import { Iterable } from 'immutable';
// import { IexerciseRecord } from './exercises.types';
// import { exercisesReducer } from './exercises.reducer';
// import { exercisesActions } from '../../actions/exercises.actions';

// describe('Exercise Reducer', () => {
//   let initState: IExerciseRecord;

//   beforeEach(() => {
//     initState = exerciseReducer(undefined, { type: 'TEST_INIT'});
//   });

//   it('should have an immutable initial state', () => {
//     expect(Iterable.isIterable(initState)).toBe(true);
//   });

//   it('should set loading to true on LOGIN_USER_PENDING', () => {
//     const nextState = exerciseReducer(
//       initState,
//       { type: exerciseActions.LOGIN_USER });
//     expect(nextState.get('isLoading')).toBeTruthy;
//     expect(nextState.get('token')).toEqual(null);
//   });

//   it('should save the user token on LOGIN_USER_SUCCESS', () => {
//     const nextState = exerciseReducer(
//       initState,
//       {
//         type: exerciseActions.LOGIN_USER_SUCCESS,
//         payload: { token: 1234 }
//       }
//     );
//     expect(nextState.get('isLoading')).toBeFalsy;
//     expect(nextState.get('hasError')).toBeFalsy;
//     expect(nextState.get('token')).toEqual(1234);
//   });

//   it('should flag an error on LOGIN_USER_ERROR', () => {
//     const nextState = exerciseReducer(
//       initState,
//       { type: exerciseActions.LOGIN_USER_ERROR });
//     expect(nextState.get('isLoading')).toBeFalsy;
//     expect(nextState.get('hasError')).toBeTruthy;
//   });

//   it('should clear user data on LOGOUT_USER', () => {
//     const nextState = exerciseReducer(
//       initState,
//       { type: exerciseActions.LOGOUT_USER });
//     expect(nextState.get('isLoading')).toBeTruthy;
//     expect(nextState.get('hasError')).toBeFalsy;
//     expect(nextState.get('token')).toEqual(null);
//   });
// });
