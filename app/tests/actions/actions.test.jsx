const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  })
  it('should generate add todo', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var res = actions.addTodo(action.text);
    expect(res.text).toEqual(action.text);
  });
  it('should toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    var res = actions.toggleTodo(action.id)
    expect(res).toEqual(action);
  });
  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
})
