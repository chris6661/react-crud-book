import React from 'react';
import {StrictMode} from 'react'; 
import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// createRoot(<AppRouter />, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
); 