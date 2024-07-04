import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// importamos los componentes
import { ToDoList } from './componentes/toDoList.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <Fragment>
  <ToDoList />
</Fragment>

root.render(
  element
);
