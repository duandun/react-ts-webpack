
import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/store';
import { increment, decrement, incrementAsync, selectCount } from '../store/features/counterSlice';
import './counter.test.less';

const CounterTest: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    function handleClickAdd(): void {
        dispatch(increment());
    }
    function handleClickMinus(): void {
        dispatch(decrement());
    }
    function handleClickAsynAdd(): void {
        dispatch(incrementAsync(7));
    }
    return (
        <div className='counterContainer'>
            <p>{count}</p>
            <button onClick={handleClickAdd}>加</button>
            <button onClick={handleClickMinus}>减</button>
            <button onClick={handleClickAsynAdd}>异步加</button>
        </div>
    );
};

export default CounterTest;
