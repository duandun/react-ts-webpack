
import React, { useCallback } from 'react';
import { DatePicker } from 'antd';

interface CallbackProps {
    id: string;
}
const TestHooks: React.FC<CallbackProps> = (props) => {
    const { id } = props;
    const handleSubmit = useCallback((evt: React.MouseEvent) => {
        console.log(id);
        console.log(evt);
    }, [id]);
    return (
        <div onClick={handleSubmit} className="button_style">
            <DatePicker />
        </div>
    );
};

export default TestHooks;
