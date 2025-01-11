import React, { useReducer } from 'react'

const todoList = [
    {
        id: 1,
        title: "Read Book",
        complete: false,
      },
      {
        id: 2,
        title: "Play Football",
        complete: false,
      },
      {
        id: 3,
        title: "Pray",
        complete: false,
      },
      {
        id: 4,
        title: "Have Lunch",
        complete: false,
      }];

function reducer(state, action) {
    switch(action.type) {
        case "Complete":
            console.log('Task Done...', action.id)
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, complete: !todo.complete}
                }
                else {
                    return todo
                }
            })
        default: 
            console.log('Default action...')
            return state
    }
}

function Todo() {

    const [todos, dispatch] = useReducer(reducer, todoList)
    console.log(todos)

    const handleChange = (todo) => {
        dispatch({type: "Complete", id: todo.id})
    }
  return (
    <>
        <h1>Todo App</h1>
        {
            todos.map(todo => (
                <div key={todo.id}>
                    <span style={{display: 'flex'}}>
                        <h3>{todo.title}</h3>
                    {/* { !todo.complete &&  */}
                        <button onClick={() => handleChange(todo)}>Done</button>
        {/* } */}
                    </span>
                </div>
            ))
        }
    </>
  )
}

export default Todo