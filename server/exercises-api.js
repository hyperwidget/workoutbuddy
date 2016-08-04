'use strict';

const fs = require('fs');
const winston = require('winston');
const denodeify = require('denodeify');
const readFile = denodeify(fs.readFile);

module.exports = {

  readExercises: () => {
    return readFile('./server/exercises.json')
    .then(exerciseData => {
      return JSON.parse(exerciseData);
    })
    .catch(err => {
      winston.error(err);
      throw err;
    });
  },

};
