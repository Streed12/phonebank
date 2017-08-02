import knexModule from 'knex';
import bookshelfModule from 'bookshelf';
import * as chai from 'chai';
import { test as testconfig } from '../../../knexfile';
import Question from '../../../server/db/services/questions';
import Model from '../../../server/db/models/questions';

const knex = knexModule(testconfig);
const knexdb = bookshelfModule(knex);
const questionsModel = Model(knexdb);
<<<<<<< HEAD

=======
>>>>>>> basic outline of tests for the questions services
const assert = chai.assert;
const should = chai.Should();
const expect = chai.expect;

describe('Question service tests', () => {
  before(() => {
    knexdb.knex.schema.hasTable('questions').then((exist) => {
      if (!exist) {
        knexdb.knex.schema.createTable('questions', (table) => {
<<<<<<< HEAD
          table.increments('id').primary();
=======
          table.increments().primary();
>>>>>>> basic outline of tests for the questions services
          table.string('title').notNullable().index();
          table.text('description').notNullable().index();
          table.enu('type', ['multiselect', 'singleselect', 'paragraph']).notNullable();
          table.text('responses').notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log('Created questions table');
        })
        .catch(err => console.log('Error creating questions table', err));
      }
    });
  });

  after(() => knexdb.knex.schema.dropTable('questions'));

  describe('Data insertion', function() {
    beforeEach(() => {
      this.paramsArray = [
        {
          title: 'Testing Tables',
          description: 'Why do we like testing?',
          type: 'paragraph',
          responses: ''
        },
        {
          title: 'Still Testing Tables',
          description: 'What is your fav ice cream?',
          type: 'multiselect',
          responses: 'strawberry,oreo,tea'
        },
        {
          title: 'Still Testingggg Tablessss',
          description: 'Do you like sloths?',
          type: 'singleselect',
          responses: 'yes,no,sometimes'
        }
      ];
    });

    it('should be able to save question title, description, type, and responses options', (done) => {
      this.paramsArray.forEach((questionObj) => {
        Question.saveNewQuestion(questionObj, questionsModel)
          .then((question) => {
<<<<<<< HEAD
            console.log('@@@@@@@@@@@@@@@@@@@@@@@QUESTION: ', question)
=======
>>>>>>> basic outline of tests for the questions services
            expect(question.attributes.title).to.equal(questionObj.title);
            expect(question.attributes.description).to.equal(questionObj.description);
            expect(question.attributes.type).to.equal(questionObj.type);
            expect(question.attributes.responses).to.equal(questionObj.responses);
<<<<<<< HEAD
          }, done)
          .catch((err) => {
            console.log('error with save question title, description, type, and responses options', err);
          });
=======
          }, done);
>>>>>>> basic outline of tests for the questions services
      });
    });
  });

  describe('Data retrieval', function() {

    it('should retrieve all questions in the table', (done) => {
      Question.getAllQuestions(questionsModel)
        .then((questions) => {
          expect(questions.length).to.equal(3);
          done();
<<<<<<< HEAD
        }, done)
        .catch((err) => {
            console.log('error with should retrieve all questions in the table', err);
        });
=======
        }, done);
>>>>>>> basic outline of tests for the questions services
    });

    it('should return all questions in decending order from last update', (done) => {
      Question.getAllQuestions(questionsModel)
        .then((questions) => {
          expect(questions[0].attributes.title).to.equal('Testing Tables');
          expect(questions[2].attributes.title).to.equal('Still Testingggg Tablessss');
<<<<<<< HEAD
        }, done)
        .catch((err) => {
            console.log('error with return all questions in decending order from last update', err);
        });
=======
        }, done);
>>>>>>> basic outline of tests for the questions services
    });

    it('should retrieve a question by id', (done) => {
      Question.getQuestionById({ id: 1 }, questionsModel)
        .then((question) => {
          expect(question.attributes.title).to.equal('Testing Tables');
          done();
<<<<<<< HEAD
        }, done)
        .catch((err) => {
            console.log('error with should retrieve a question by id', err);
        });
=======
        }, done);
>>>>>>> basic outline of tests for the questions services

      Question.getQuestionById({ id: 2 }, questionsModel)
        .then((question) => {
          expect(question.attributes.title).to.equal('Still Testing Tables');
          done();
<<<<<<< HEAD
        }, done)
        .catch((err) => {
            console.log('error with should retrieve a question by id', err);
        });
=======
        }, done);
>>>>>>> basic outline of tests for the questions services

      Question.getQuestionById({ id: 3 }, questionsModel)
        .then((question) => {
          expect(question.attributes.title).to.equal('Still Testingggg Tablessss');
          done();
<<<<<<< HEAD
        }, done)
        .catch((err) => {
            console.log('error with should retrieve a question by id', err);
        });
=======
        }, done);
>>>>>>> basic outline of tests for the questions services
    });
  });
});
