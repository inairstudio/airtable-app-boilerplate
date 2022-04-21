import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
    <div className="container">
        <h2>Hello from InAir Studio!</h2>
        <p>Let's build an app using React-Bootstrap!</p>
    </div>
);

initializeBlock(() => <App/>);
