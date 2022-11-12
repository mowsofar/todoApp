import React, {useState} from 'react';
import {Button, Input} from 'antd';

interface PostAddFormProps {
    onSubmit: (input: string) => void
}

const PostAddForm: React.FC<PostAddFormProps> = (props) => {

    const [input, setInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            submitForm();
        }
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        submitForm();
    }

    const submitForm = () => {
        props.onSubmit(input);
        setInput("");
    }

    return(
        <form onKeyDown={handleKeyPress} >
            <Input type="text"
                   value={input}
                   onChange={handleChange}
                   style={{margin: "10px", width: "600px"}}
                   placeholder="Введите запланированное действие"/>

            <Button onClick={handleSubmit} type="primary">Добавить</Button>
        </form>
    )
}
export default PostAddForm;