import React, {useState} from 'react'

export default () => {
    const [todos, setTodos] = useState([{text: "Go to store", complete: false}, {text: "Walk dog", complete: false}, {text: "Clean room", complete: false}, {text: "Go to grad party", complete: false}])

    return (
        <div>
            <h1>Todos</h1>
            {todos.map(todo => (

                <li style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                    {todo.text}{todo.complete && " (DONE)"}
                    <input type="checkbox" value={todo.complete} onChange={() => setTodos(todos.map(t => {
                        if(t.text === todo.text){
                            t.complete = !t.complete
                        }
                        return t
                    }))}/>
                </li>
            ))}
        </div>
    ) 
}