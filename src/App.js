// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

const App = () => (
    <Provider store={store}>
        <div className="App">
            <h1>ToDo App</h1>
            <AddTask />
            <ListTask />
        </div>
    </Provider>
);

export default App;