//console.info('http://redux.js.org/docs/basics/ExampleTodoList.html');
console.info('http://codepen.io/iamjoshellis/pen/zBjEpL');
const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state, {
				id: action.id,
				text: action.text,
				completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id !== action.id) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed
				}
			});
		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

const { createStore } = Redux;
const store = createStore(todoApp);
const { Component } = React;


const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li
		className={
			completed ?
				'todo todo--completed' :
				'todo'
		}
		onClick={onClick}
		>
		<span className="todo__content">
			{text}
		</span>
	</li>
);

const TodoList = ({
	todos,
	onTodoClick
}) => {
	return (
		<div>
			{todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			)}
		</div>
	)
};

const AddTodo = ({
  onAddClick
}) => {
  let input;
  return (
    <div className="add-todo">
      <input
				className="add-todo__input"
				ref={node => {
        input = node;
      }} />
      <button
				className="add-todo__btn"
				onClick={() => {
				input.value ?
        	onAddClick(input.value) :
					false;
        	input.value = '';
      }}>
				<i className="fa fa-plus">Add</i>
      </button>
    </div>
  );
};

const FilterLink = ({
  filter,
  currentFilter,
  children,
	onClick
}) => {
  return (
    <a
			className="filter__link"
			href='#'
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
     >
      {children}
     </a>
  );
};

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <div className="filters">
    <FilterLink
      filter='SHOW_ALL'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-list-ul"></i>
    </FilterLink>
    <FilterLink
      filter='SHOW_ACTIVE'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-times"></i>
    </FilterLink>
    <FilterLink
      filter='SHOW_COMPLETED'
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      <i className="fa fa-check"></i>
    </FilterLink>
  </div>
);

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
	}
}

let nextTodoId = 0;
const TodoApp = ({
	todos,
	visibilityFilter
}) => (
	<div className="todo-app">
		<h1 className="todo-title">Todos</h1>
		<TodoList
			todos={
				getVisibleTodos(
					todos,
					visibilityFilter
				)
			}
			onTodoClick={id =>
				store.dispatch({
					type: 'TOGGLE_TODO',
					id
				})
			}
		/>
		<AddTodo
			onAddClick={text =>
				store.dispatch({
					type: 'ADD_TODO',
					id: nextTodoId++,
					text
				})
			}
		/>
		<Footer
			visibilityFilter={visibilityFilter}
			onFilterClick={filter =>
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				})
			}
		/>
	</div>
);

const render = () => {
	ReactDOM.render(
		<TodoApp
			{...store.getState()}
		/>,
		document.getElementById('app')
	);
};

store.subscribe(render);
render();

/*
 * Tests
 */

// const testAddTodo = () => {
// 	const stateBefore = [];
// 	const action = {
// 		type: 'ADD_TODO',
// 		id: 0,
// 		text: 'Learn Redux'
// 	};
// 	const stateAfter = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		}
// 	];
// 	expect(
// 		todos(stateBefore, action)
// 	).toEqual(stateAfter);
// };

// const testToggleTodo = () => {
// 	const stateBefore = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		},
// 		{
// 			id: 1,
// 			text: 'Profit!',
// 			completed: false
// 		}
// 	];
// 	const action = {
// 		type: 'TOGGLE_TODO',
// 		id: 1
// 	};
// 	const stateAfter = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		},
// 		{
// 			id: 1,
// 			text: 'Profit!',
// 			completed: true
// 		}
// 	];
// 	expect(
// 		todos(stateBefore, action)
// 	).toEqual(stateAfter);
// };

// testAddTodo();
// testToggleTodo();

// console.log('All Tests Passed!');
