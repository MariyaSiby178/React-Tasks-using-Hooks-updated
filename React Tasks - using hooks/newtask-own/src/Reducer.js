import { useReducer } from "react";

const intialState = []

function reducer (state, action){
    switch (action.type) {
        case "ADD_TASK":
            return [...state, {
                id: state.length + 1,
                name : action.payload
            }
            ]

    }

}

const Todos = () =>{
    const [state, dispatch] = useReducer (reducer, intialState)

    return (
        <div className="d-flex justify-content-center flex-column mt-5">
            <label for = "Name">Name :</label>
            <input className="ms-2 w-50" type = "text"></input>
            <button onBlur={(e)=>dispatch({type: "ADD_TASK" , payload : e.target.value})} >Add item</button>
            <hr/>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {state.map(todo => <td key= {todo.id}>{todo.name}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Todos