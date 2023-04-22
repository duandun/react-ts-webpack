import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App';
import { Provider } from 'react-redux';
import store, { connector } from './store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

const ConnectedApp = connector(App);

root.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
);
