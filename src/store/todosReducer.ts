const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";

export enum TodoActionTypes {
    ADD_TODO = "ADD_TODO",
    SET_TODOS = "SET_TODOS"
}

interface IPost {
    id: number,
    description: string,
    isFavourite: boolean,
    isDone: boolean
}

interface TodosState {
    todos: any[]
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO,
    payload: object
}

interface SetTodosAction {
    type: TodoActionTypes.SET_TODOS,
    payload: any[]
}

type TodosAction = AddTodoAction | SetTodosAction


const defaultReducer: TodosState = {
    todos: []
}

export const todosReducer = (state = defaultReducer, action: TodosAction): TodosState => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case SET_TODOS:
            return {...state, todos: action.payload}
        default: return state;
    }

}
