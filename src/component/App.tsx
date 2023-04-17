import React, { useState, useEffect } from 'react';
import TestHooks from './TestHooks';

const App = () => {
    const [id, setId] = useState('1');
    useEffect(() => {
        setTimeout(() => {
            console.log('aaaa');
            setId('444');
        }, 2 * 1000);
    }, []);
    return (
        <div><TestHooks id={id} />啦嗯嗯啦</div>
    );
};

export default App;