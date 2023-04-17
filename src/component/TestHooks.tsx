
import React, { useCallback } from 'react';

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
        <div onClick={handleSubmit} style={{ background: 'red' }}>
            按钮
        </div>
    );
};

export default TestHooks;
