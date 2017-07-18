const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    })
  })
  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type:'TOGGLE_SHOW'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true)
    })
  })
  describe('todoReducer', () => {
    it('should add todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Finish Work'
      };
      var res = reducers.todoReducer(df([]),df(action))

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type:'TOGGLE_TODO',
        id:'123'
      }
      var res = reducers.todoReducer(df(todos),df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);


    })
  })
})
