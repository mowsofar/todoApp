import React, {useEffect, useState} from 'react';
import PostAddForm from '../PostAddForm';
import PostListItems from "../PostListItems";
import {Segmented} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TodoActionTypes} from "../../store/todosReducer";
import {changePanelAction} from "../../store/panelState";


interface IPost {
    id: number,
    description: string,
    isFavourite: boolean,
    isDone: boolean
}

const PostList: React.FC = () => {

    const urlRequest = 'https://todo-golang-edu.herokuapp.com/api/';

    async function getPosts() {
        let newArr;
        const response = await fetch(urlRequest);
        const data = await response.json();
        newArr = data.result;
        newArr.reverse();
        dispatch({type: "SET_TODOS", payload: newArr})
    }

    useEffect(() => {getPosts()}, [])

    const dispatch = useDispatch();

    // const [value, setValue] = useState<string | number>('Все записи');

    const likedTodos = useTypedSelector(state => state.todos.todos).filter((todo: IPost) => todo.isFavourite);
    const doneTodos = useTypedSelector(state => state.todos.todos).filter((todo: IPost) => todo.isDone);

    const addTodo = (text: string) => {
        const todo: IPost = {
            id: new Date().getTime(),
            description: text,
            isFavourite: false,
            isDone: false
        }
        dispatch({type: TodoActionTypes.ADD_TODO, payload: todo})

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        }

        fetch(urlRequest, requestOptions)
            .then(response => {console.log(response.json())})
            .then(() => {getPosts()})

    }

    const mas = useTypedSelector(state => state.todos.todos);

    const changeDone = async (id: number) => {

        let changeDoneMethod;

        const findVariable: IPost | undefined = mas.find(obj => obj.id===id);

        if (!findVariable) return;

            changeDoneMethod = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({isDone: !findVariable.isDone})
            }

        const response = await fetch(`https://todo-golang-edu.herokuapp.com/api/changeIsDone/${id}`, changeDoneMethod);
            const data = await response.json();
            console.log(data);
            await getPosts();

    }

    const changeLiked = (id: number) => {

        let changeLikedMethod;

        const findVariable1: IPost | undefined = mas.find(obj => obj.id===id);

        if (!findVariable1) return;

            changeLikedMethod = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({isFavourite: !findVariable1.isFavourite})
            }

        fetch(`https://todo-golang-edu.herokuapp.com/api/changeIsFavourite/${id}`, changeLikedMethod)
            .then(response => {return response.json()})
            .then(data => {console.log(data)})
            .then(() => getPosts())

    }

    const removeTodo = (id: number) => {

        const deleteMethod = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json;'
            }
        }

        fetch(`https://todo-golang-edu.herokuapp.com/api/${id}`, deleteMethod)
            .then(response => {return response.json()})
            .then(data => {console.log(data)})
            .then(() => getPosts())
    }

    const value = useTypedSelector(state => state.panel.value);

    const onChangeValue = (value: string | number) => {
        dispatch(changePanelAction(value as string))
    }

    return(
        <div>
            <Segmented options={['Все записи', 'Избранные', 'Выполненные']} value={value} onChange={onChangeValue}/>
            <PostAddForm onSubmit={addTodo}/>
            <PostListItems todos={value==='Все записи'? mas: value==='Избранные' ? likedTodos: doneTodos} removeTodo={removeTodo} changeLiked={changeLiked} changeState={changeDone}/>
        </div>
    );
}
export default PostList;