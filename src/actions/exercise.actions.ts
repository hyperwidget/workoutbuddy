import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class ExerciseActions {
  static GET_ALL = 'GET_ALL';
  static GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
  static GET_ALL_ERROR = 'GET_ALL_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  getAll() {
    this.ngRedux.dispatch({
      type: ExerciseActions.GET_ALL
    });
  };

  getAllSuccess(exercises) {
    alert('S U C C E S S');
    this.ngRedux.dispatch({
      type: ExerciseActions.GET_ALL_SUCCESS,
      payload: exercises
    });
  };
} 
