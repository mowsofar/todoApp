import React, {useState} from 'react';

import {Button} from 'antd';
import {HeartOutlined, HeartFilled, DeleteOutlined} from '@ant-design/icons';
import {Checkbox} from 'antd';



interface IProps {
    todos: any,
    removeTodo: any,
    changeLiked: any,
    changeState: any
}

interface IPost {
    id: number,
    description: string,
    isFavourite: boolean,
    isDone: boolean
}

function PostListItems({todos, removeTodo, changeLiked, changeState}: IProps) {


    return todos.map((todo: IPost) => (

            <div key={todo.id} style={{display: 'flex'}}>

                <div style={{width: '550px', padding: '20px'}}>{todo.description}</div>

                <Button onClick={() => changeLiked(todo.id)} style={{margin: '20px'}}>
                    {!todo.isFavourite ? <HeartOutlined/> : <HeartFilled/>}
                </Button>

                <Button onClick={() => removeTodo(todo.id)} style={{margin: '20px'}}>
                    <DeleteOutlined/>
                </Button>

                <Checkbox checked={todo.isDone} onClick={()=>changeState(todo.id)} style={{margin: '20px'}}>{todo.isDone ? 'Выполнено': 'Не выполнено'}</Checkbox>
            </div>
        )
    )

}
export default PostListItems;