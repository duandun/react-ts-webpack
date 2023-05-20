import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import './app.less';
import { useAppDispatch, PropsFromRedux } from '../store/store';
import { createCustomComponent } from '../store/features/componentSlice';
import AsyncTimer from './AsyncTimer.js';

const App: React.FC<PropsFromRedux> = (props) => {
    const [Cmp, setCmp] = useState<React.FC>();
    const dispatch = useAppDispatch();
    const { cmpName } = props.cmp;
    useEffect(() => {
        const loadData = async (name: string) => {
            const data = name ? await import(`./${name}`) : { default: null };
            setCmp(() => data.default);
        };
        loadData(cmpName);
    }, [cmpName]);
    function handleExecuteClick(name: string) {
        dispatch(createCustomComponent({
            cmpName: name
        }));
    }
    function handleAsyncTimer() {
        AsyncTimer.save(1)(2)(5);
        AsyncTimer.recurseFn(AsyncTimer.arr);
    }
    return (
        <div className="app_container">
            <div className="app_title_name">{cmpName}</div>
            <div className="app_result">结果：
                {Cmp && <Cmp />}
            </div>
            <div className="app_button_container">
                <Button type="primary" size="large" onClick={() => handleExecuteClick('SplitArray659')}>运行</Button>
                <Button type="primary" size="large" onClick={() => handleAsyncTimer()}>运行2</Button>
            </div>
        </div>
    );
};

export default App;