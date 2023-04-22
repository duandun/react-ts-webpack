import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import './app.less';
import { useAppDispatch, useAppSelector } from '../store/store';
import { createCustomComponent } from '../store/features/componentSlice';

const App: React.FC = () => {
    const [Cmp, setCmp] = useState<React.FC>();
    const dispatch = useAppDispatch();
    const { cmpName } = useAppSelector((state) => state.cmp);
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
    return (
        <div className="app_container">
            <div className="app_title_name">{cmpName}</div>
            <div className="app_result">结果：
                {Cmp && <Cmp />}
            </div>
            <div className="app_button_container">
                <Button type="primary" size="large" onClick={() => handleExecuteClick('CounterTest')}>运行</Button>
            </div>
        </div>
    );
};

export default App;