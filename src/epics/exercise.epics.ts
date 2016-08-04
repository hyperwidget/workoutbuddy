import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPayloadAction, ExerciseActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

const BASE_URL = '/api';

@Injectable()
export class ExerciseEpics {
  constructor(private http: Http) {}

  getAll = (action$: Observable<IPayloadAction>) => {
    // return action$.filter(({ type }) => type === ExerciseActions.GET_ALL)
      // .flatMap(({ payload }) => {
        return this.http.get(`${BASE_URL}/exercises`)
          .map(result => ({
            type: ExerciseActions.GET_ALL_SUCCESS,
            payload: result.json()
          }))
          .catch(error => {
            return Observable.of({
              type: ExerciseActions.GET_ALL_ERROR
            });
          });
    // });
  }
}
