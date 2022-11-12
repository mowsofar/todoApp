import React, {useMemo, useState} from 'react';
import {Segmented} from "antd";
import PostList from '../PostList';

interface IPost {
    id: number,
    description: string,
    isLiked: boolean,
    isDone: boolean
}

const PostFilter: React.FC = () => {

    const [value, setValue] = useState<string | number>('Все записи');

    return (<div>
        <Segmented options={['Все записи', 'Избранные', 'Выполненные']} value={value} onChange={setValue}/>

    </div>
    );
}
export default PostFilter;