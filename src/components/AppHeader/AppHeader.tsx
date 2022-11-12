import React from 'react';
import {PageHeader} from "antd";

const AppHeader: React.FC = () => {
    return (
        <PageHeader title="Todo app"
                    subTitle="Обретите сосредоточенность, организованность и спокойствие, планируя свой день с нашим приложением."
        />
    );
}

export default AppHeader;